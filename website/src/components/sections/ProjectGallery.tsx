"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ImageLightboxOverlay } from "@/components/ui/ImageLightboxOverlay";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () =>
      images.map((src, index) => ({
        src,
        alt: `${projectName} photo ${index + 1}`,
      })),
    [images, projectName],
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const goTo = useCallback(
    (direction: -1 | 1) => {
      setActiveIndex((current) => {
        if (current === null) return null;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  return (
    <div data-no-page-lightbox>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, i) => (
          <FadeIn key={src} delay={Math.min(i * 0.04, 0.6)} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
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

      <ImageLightboxOverlay
        images={lightboxImages}
        activeIndex={activeIndex}
        onClose={close}
        onNavigate={goTo}
        label={`${projectName} gallery viewer`}
      />
    </div>
  );
}
