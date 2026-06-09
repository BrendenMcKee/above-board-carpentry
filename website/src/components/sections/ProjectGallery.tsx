"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const close = useCallback(() => setActiveIndex(null), []);

  const openAt = useCallback((index: number) => {
    setImageLoaded(false);
    setActiveIndex(index);
  }, []);

  const goTo = useCallback(
    (direction: -1 | 1) => {
      setImageLoaded(false);
      setActiveIndex((current) => {
        if (current === null) return null;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  const activeSrc = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goTo(-1);
      if (event.key === "ArrowRight") goTo(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, goTo]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, i) => (
          <FadeIn key={src} delay={Math.min(i * 0.04, 0.6)} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => openAt(i)}
              className="group relative block w-full overflow-hidden rounded-xl text-left ring-forest/0 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              aria-label={`View ${projectName} photo ${i + 1} of ${images.length}`}
            >
              <Image
                src={src}
                alt={`${projectName} photo ${i + 1}`}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-forest/0 transition-colors group-hover:bg-forest/10" />
            </button>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && activeSrc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${projectName} gallery viewer`}
          >
            <button
              type="button"
              className="absolute inset-0 bg-charcoal/88 backdrop-blur-sm"
              onClick={close}
              aria-label="Close gallery"
            />

            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper md:right-6 md:top-6"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper md:left-6 md:h-12 md:w-12"
                  aria-label="Previous photo"
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper md:right-6 md:h-12 md:w-12"
                  aria-label="Next photo"
                >
                  <ChevronIcon direction="right" />
                </button>
              </>
            )}

            <div className="relative z-10 flex max-h-[85vh] max-w-[calc(100vw-5rem)] flex-col items-center md:max-w-[calc(100vw-8rem)]">
              <div className="inline-block max-w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/15">
                {!imageLoaded && (
                  <div
                    className="flex items-center justify-center bg-white/5 px-10 py-14"
                    aria-live="polite"
                    aria-busy="true"
                  >
                    <GalleryLoader />
                  </div>
                )}
                <Image
                  key={activeSrc}
                  src={activeSrc}
                  alt={`${projectName} photo ${activeIndex + 1}`}
                  width={1600}
                  height={1200}
                  onLoad={() => setImageLoaded(true)}
                  className={`block max-h-[78vh] w-auto max-w-[calc(100vw-5rem)] md:max-w-[calc(100vw-8rem)] ${
                    imageLoaded ? "opacity-100" : "hidden"
                  }`}
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="mt-4 text-sm font-medium text-white/80">
                {activeIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryLoader() {
  return (
    <div
      className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-white/75"
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
