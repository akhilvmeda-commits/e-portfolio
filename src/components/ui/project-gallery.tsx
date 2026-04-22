"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";

import type { ProjectGalleryItem } from "@/content/site";

type ProjectGalleryProps = {
  images: ProjectGalleryItem[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useEffectEvent(() => {
    setSelectedIndex(null);
  });

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, selectedIndex]);

  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="block w-full cursor-zoom-in text-left outline-none transition hover:opacity-95 focus-visible:ring-4 focus-visible:ring-blue-300/50"
              aria-label={`Open enlarged image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={1000}
                className="h-72 w-full object-cover"
              />
            </button>
            <figcaption className="px-4 py-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-white"
            >
              Close
            </button>
            <div className="overflow-hidden rounded-[28px] border border-slate-700 bg-slate-900 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.95)]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1800}
                height={1200}
                className="max-h-[78vh] w-full object-contain bg-black"
                priority
              />
              <div className="border-t border-slate-700 px-6 py-5 text-sm leading-6 text-slate-200">
                {selectedImage.caption}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
