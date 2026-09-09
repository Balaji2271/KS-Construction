import { useEffect, useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';

function FaqItem({ item, open, onToggle }) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border border-black/8 bg-white">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-ink transition hover:bg-cream"
        >
          <span>{item.question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-gold transition ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="border-t border-black/8 px-5 py-4 text-muted"
      >
        <p className="text-base leading-relaxed sm:text-lg">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  useEffect(() => {
    const scriptId = 'ks-faq-schema';
    document.getElementById(scriptId)?.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <section className="bg-cream py-16 sm:py-24" aria-labelledby="faq-heading">
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div id="faq-heading">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions Homeowners Often Ask"
              subtitle="Clear answers before you call — so the first conversation is easier."
            />
          </div>
          <p className="mt-6 text-lg text-muted">
            Still unsure about your project? Reach out and we will walk through your requirements with you.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="dark">
              Ask About Your Project
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-3">
            {faqs.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                open={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
