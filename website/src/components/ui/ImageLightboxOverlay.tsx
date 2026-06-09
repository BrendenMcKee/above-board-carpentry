"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface DisplaySize {
  width: number;
  height: number;
}

interface ImageLightboxOverlayProps {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
  label?: string;
}

function getUpscaledDimensions(naturalWidth: number, naturalHeight: number): DisplaySize {
  const maxWidth = Math.min(window.innerWidth * 0.9 - 80, 1200);
  const maxHeight = window.innerHeight * 0.78;
  const minWidth = Math.min(maxWidth, Math.max(480, window.innerWidth * 0.58));
  const minHeight = Math.min(maxHeight, window.innerHeight * 0.5);

  let scale = 1;
  if (naturalWidth < minWidth) scale = Math.max(scale, minWidth / naturalWidth);
  if (naturalHeight < minHeight) scale = Math.max(scale, minHeight / naturalHeight);
  scale = Math.min(scale, 3);

  let width = naturalWidth * Math.max(1, scale);
  let height = naturalHeight * Math.max(1, scale);

  const clamp = Math.min(maxWidth / width, maxHeight / height, 1);
  width *= clamp;
  height *= clamp;

  return {
    width: Math.max(1, Math.round(width)),
    height: Math.max(1, Math.round(height)),
  };
}

export function ImageLightboxOverlay({
  images,
  activeIndex,
  onClose,
  onNavigate,
  label = "Image viewer",
}: ImageLightboxOverlayProps) {
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate(-1);
      if (event.key === "ArrowRight") onNavigate(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {activeIndex !== null && activeImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/88 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close image viewer"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper md:right-6 md:top-6"
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate(-1)}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper md:left-6 md:h-12 md:w-12"
                aria-label="Previous image"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(1)}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper md:right-6 md:h-12 md:w-12"
                aria-label="Next image"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}

          <LightboxImagePanel
            key={activeImage.src}
            image={activeImage}
            activeIndex={activeIndex}
            total={images.length}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LightboxImagePanel({
  image,
  activeIndex,
  total,
}: {
  image: LightboxImage;
  activeIndex: number;
  total: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displaySize, setDisplaySize] = useState<DisplaySize | null>(null);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setDisplaySize(getUpscaledDimensions(img.naturalWidth, img.naturalHeight));
    setImageLoaded(true);
  };

  return (
    <div className="relative z-10 flex max-h-[85vh] max-w-[calc(100vw-5rem)] flex-col items-center md:max-w-[calc(100vw-8rem)]">
      {!imageLoaded && (
        <div aria-live="polite" aria-busy="true">
          <GalleryLoader />
        </div>
      )}

      {imageLoaded && displaySize && (
        <div
          className="inline-block overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/15 leading-[0]"
          style={{
            width: displaySize.width,
            height: displaySize.height,
          }}
        >
          {/* Native img keeps the frame pixel-aligned with the rendered image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            width={displaySize.width}
            height={displaySize.height}
            draggable={false}
            className="block"
            style={{
              width: displaySize.width,
              height: displaySize.height,
            }}
          />
        </div>
      )}

      {!imageLoaded && (
        <Image
          src={image.src}
          alt=""
          width={1600}
          height={1200}
          onLoad={handleImageLoad}
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
      )}

      <p className="mt-4 text-sm font-medium text-white/80">
        {activeIndex + 1} of {total}
      </p>
    </div>
  );
}

function GalleryLoader() {
  return (
    <div
      className="h-9 w-9 animate-spin rounded-full border-2 border-transparent border-t-white/80"
      role="status"
      aria-label="Loading image"
    />
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      )}
    </svg>
  );
}
