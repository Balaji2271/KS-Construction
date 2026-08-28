import { useEffect, useId } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const titleId = useId();
  const item = items[index];

  useEffect(() => {
    if (index == null) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, onClose, onNext, onPrev]);

  if (index == null || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-white text-ink"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm bg-white text-ink sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm bg-white text-ink sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
      <figure className="max-h-[86vh] max-w-5xl">
        <img
          src={item.image || item}
          alt={item.title || 'Construction gallery image'}
          className="max-h-[78vh] w-full object-contain"
        />
        <figcaption id={titleId} className="mt-4 text-center text-white">
          <span className="block text-lg font-semibold">{item.title || 'Gallery image'}</span>
          <span className="mt-1 block text-white/80">
            {index + 1} / {items.length}
            {item.category ? ` · ${item.category}` : ''}
            {item.isSample ? ' · Sample image' : ''}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
