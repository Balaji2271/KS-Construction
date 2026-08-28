import { useMemo, useState } from 'react';
import { GALLERY_FILTERS, galleryItems } from '../data/gallery';
import Lightbox from './Lightbox.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const items = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="GALLERY"
          title="Spaces, details and construction"
          subtitle="A visual look at the kind of architecture and workmanship we aim to deliver."
        />
        <p className="mt-4 max-w-3xl text-muted">
          Sample images until KS Construction project photography is available.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-11 rounded-sm px-4 text-[15px] font-semibold ${
                filter === item ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-mist'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={(index % 6) * 0.04}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden bg-ink text-left"
              >
                <img
                  src={item.image}
                  alt={`${item.title} (${item.category}${item.isSample ? ', sample image' : ''})`}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56 lg:h-64"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 bg-white/95 px-2 py-1 text-xs font-semibold text-ink sm:text-sm">
                  {item.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() => setActive((i) => (i === 0 ? items.length - 1 : i - 1))}
        onNext={() => setActive((i) => (i === items.length - 1 ? 0 : i + 1))}
      />
    </section>
  );
}
