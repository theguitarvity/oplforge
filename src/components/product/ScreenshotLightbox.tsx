import { useState } from 'react';

export interface LightboxImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  concept: boolean;
}

export interface ScreenshotLightboxProps {
  images: LightboxImage[];
}

/**
 * Click-to-enlarge screenshot gallery + lightbox. This is the one
 * interactive island for the product tour (US2) — everything else on the
 * page renders as plain static HTML.
 */
export default function ScreenshotLightbox({ images }: ScreenshotLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.src} className="group">
            <button
              type="button"
              className="block w-full overflow-hidden rounded-base border border-border bg-surface-elevated text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setActiveIndex(index)}
              aria-label={`Enlarge screenshot: ${image.caption}`}
            >
              <div className="relative">
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform group-hover:scale-[1.02]"
                />
                {image.concept && (
                  <span className="absolute right-2 top-2 rounded-base border border-warning/30 bg-warning/15 px-2 py-1 text-xs font-medium uppercase tracking-wide text-warning">
                    Concept
                  </span>
                )}
              </div>
              <p className="px-4 py-3 text-sm text-text-secondary">{image.caption}</p>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative max-h-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-10 right-0 rounded-base border border-border bg-surface-elevated px-3 py-1.5 text-sm text-text-primary"
              onClick={() => setActiveIndex(null)}
              autoFocus
            >
              Close
            </button>
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[80vh] w-full rounded-base object-contain"
            />
            <p className="mt-2 text-center text-sm text-text-secondary">{active.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
