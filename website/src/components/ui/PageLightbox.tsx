"use client";

import {
  ImageLightboxOverlay,
  type LightboxImage,
} from "@/components/ui/ImageLightboxOverlay";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function getImageSource(img: HTMLImageElement): string {
  const src = img.currentSrc || img.src;

  try {
    const url = new URL(src, window.location.origin);
    if (url.pathname.includes("/_next/image")) {
      const original = url.searchParams.get("url");
      if (original) return decodeURIComponent(original);
    }
  } catch {
    // Fall back to the rendered src below.
  }

  return src;
}

function isEligibleImage(img: HTMLImageElement): boolean {
  if (img.closest("[data-no-page-lightbox]")) return false;
  if (img.closest("header, footer, nav")) return false;
  if (img.closest("a")) return false;
  if (img.closest('[aria-hidden="true"]')) return false;
  if (img.getAttribute("aria-hidden") === "true") return false;
  if (!img.alt?.trim()) return false;
  if (img.classList.contains("opacity-0") && img.classList.contains("pointer-events-none")) {
    return false;
  }

  const rect = img.getBoundingClientRect();
  if (rect.width < 48 || rect.height < 48) return false;

  return true;
}

function collectPageImages(): { items: LightboxImage[]; elements: HTMLImageElement[] } {
  const main = document.querySelector("main");
  if (!main) return { items: [], elements: [] };

  const elements = Array.from(main.querySelectorAll("img")).filter(isEligibleImage);
  const items = elements.map((img) => ({
    src: getImageSource(img),
    alt: img.alt.trim(),
  }));

  return { items, elements };
}

function markEligibleImages(main: HTMLElement) {
  main.querySelectorAll("img").forEach((img) => {
    const htmlImg = img as HTMLImageElement;
    const container = htmlImg.parentElement;

    if (isEligibleImage(htmlImg)) {
      htmlImg.dataset.pageLightbox = "true";
      container?.classList.add("page-lightbox-target");
    } else {
      delete htmlImg.dataset.pageLightbox;
      container?.classList.remove("page-lightbox-target");
    }
  });
}

function PageLightboxController() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [images, setImages] = useState<LightboxImage[]>([]);

  const close = useCallback(() => setActiveIndex(null), []);

  const goTo = useCallback(
    (direction: -1 | 1) => {
      setActiveIndex((current) => {
        if (current === null || images.length === 0) return null;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const img = target.closest("img") as HTMLImageElement | null;
      if (!img || !main.contains(img) || !isEligibleImage(img)) return;

      event.preventDefault();
      event.stopPropagation();

      const { items, elements } = collectPageImages();
      const index = elements.indexOf(img);
      if (index === -1 || items.length === 0) return;

      setImages(items);
      setActiveIndex(index);
    };

    markEligibleImages(main);

    const observer = new MutationObserver(() => {
      markEligibleImages(main);
    });

    observer.observe(main, { childList: true, subtree: true });
    main.addEventListener("click", handleClick);

    return () => {
      observer.disconnect();
      main.removeEventListener("click", handleClick);
      main.querySelectorAll(".page-lightbox-target").forEach((el) => {
        el.classList.remove("page-lightbox-target");
      });
    };
  }, []);

  return (
    <ImageLightboxOverlay
      images={images}
      activeIndex={activeIndex}
      onClose={close}
      onNavigate={goTo}
      label="Page image viewer"
    />
  );
}

export function PageLightbox() {
  const pathname = usePathname();
  return <PageLightboxController key={pathname} />;
}
