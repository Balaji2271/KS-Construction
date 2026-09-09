import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { COMPANY } from '../data/site';

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <div id="testimonials-heading">
          <SectionHeading
            eyebrow="CLIENT VOICES"
            title="What Our Clients Say"
            subtitle="Feedback focused on clarity, care and the quality of construction."
          />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <figure className="flex h-full flex-col border border-black/8 bg-cream p-7 transition hover:border-gold">
                <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-body">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-black/8 pt-5">
                  <p className="font-heading text-lg font-semibold text-ink">{item.name}</p>
                  <p className="text-muted">
                    {item.role}
                    {item.focus ? ` · ${item.focus}` : ''}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border border-gold/30 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted">
            Completed a project with us? We would value your feedback.
          </p>
          <Button
            href={`${COMPANY.whatsappUrl}?text=${encodeURIComponent(
              'Hello KS Construction, I would like to share feedback about my project.',
            )}`}
            target="_blank"
            rel="noreferrer"
            variant="dark"
            className="shrink-0"
          >
            Share Feedback
          </Button>
        </div>
      </div>
    </section>
  );
}
