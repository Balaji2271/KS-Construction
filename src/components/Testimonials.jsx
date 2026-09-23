import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Star } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { COMPANY } from '../data/site';

const INTERVAL = 4200; // 4.2 seconds auto-advance

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -36 : 36,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const reduce = useReducedMotion();

  // Automatically move to the next feedback every 4.2 seconds
  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [isPlaying, current]);

  const active = testimonials[current];

  function goTo(index) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  function goPrev() {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function goNext() {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <div id="testimonials-heading">
          <SectionHeading
            eyebrow="HOMEOWNER VOICES"
            title="What Homeowners Say"
            subtitle="Real homeowner experiences reflecting on-time construction, structural quality, and dependable engineering."
          />
        </div>

        {/* Running Testimonial Card */}
        <Reveal delay={0.06}>
          <div
            className="relative mx-auto mt-12 max-w-4xl overflow-hidden border border-gold/30 bg-cream p-7 shadow-card sm:p-10 lg:p-12"
            aria-live="polite"
          >
            {/* Top Bar: Project Tag, Project Name, Rating */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/8 pb-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-sm bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  {active.tag}
                </span>
                <span className="text-sm font-semibold text-muted">{active.project}</span>
              </div>
              <div className="flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Running Body with smooth directional slide transition */}
            <div className="relative min-h-[220px] pt-6 pb-2 sm:min-h-[175px]">
              <Quote className="h-10 w-10 text-gold/35" aria-hidden="true" />
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={reduce ? undefined : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-3"
                >
                  <blockquote className="text-lg leading-relaxed text-body sm:text-xl">
                    “{active.quote}”
                  </blockquote>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-black/8 pt-4">
                    <div>
                      <p className="font-heading text-lg font-semibold text-ink">{active.name}</p>
                      <p className="text-sm text-muted">
                        {active.role} · {active.location}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Project {current + 1} of {testimonials.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls: Project selector tabs + Prev/Next buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/8 pt-5">
              {/* Project Quick Tabs */}
              <div className="flex flex-wrap gap-2">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(idx)}
                    className={`min-h-9 rounded-sm px-3.5 text-xs font-semibold transition cursor-pointer ${
                      current === idx
                        ? 'bg-ink text-white ring-2 ring-gold/50'
                        : 'border border-black/10 bg-white text-ink hover:bg-mist'
                    }`}
                  >
                    0{idx + 1}. {item.tag}
                  </button>
                ))}
              </div>

              {/* Prev / Next & Play / Pause controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-black/10 bg-white text-ink transition hover:bg-mist cursor-pointer"
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  title={isPlaying ? 'Pause auto-move' : 'Resume auto-move'}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-black/10 bg-white text-ink transition hover:bg-mist cursor-pointer"
                  aria-label="Previous project feedback"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-black/10 bg-white text-ink transition hover:bg-mist cursor-pointer"
                  aria-label="Next project feedback"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Continuous Running Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
              {isPlaying && !reduce && (
                <motion.div
                  key={current}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                  className="h-full bg-gold"
                />
              )}
            </div>
          </div>
        </Reveal>

        {/* Client feedback CTA */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4 border border-gold/30 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted">
            Built your home with us? We would value your feedback.
          </p>
          <Button
            href={`${COMPANY.whatsappUrl}?text=${encodeURIComponent(
              'Hello KS Construction, I would like to share feedback about my home construction project.',
            )}`}
            target="_blank"
            rel="noreferrer"
            variant="dark"
            className="shrink-0"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            Share Feedback
          </Button>
        </div>
      </div>
    </section>
  );
}
