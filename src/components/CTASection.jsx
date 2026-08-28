import { Phone } from 'lucide-react';
import { images } from '../assets/images';
import { COMPANY } from '../data/site';
import Button from './Button.jsx';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <img
        src={images.cta.detail}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-ink/80" />
      <div className="container-site relative z-10 text-center">
        <p className="text-sm font-semibold tracking-[0.28em] text-gold-light">START A CONVERSATION</p>
        <div className="gold-rule mx-auto mt-5" />
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">Let&apos;s Build Your Vision</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
          Have a construction project in mind? Let&apos;s discuss your requirements.
        </p>
        <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href={COMPANY.phoneTel} className="min-w-[180px] uppercase tracking-[0.12em]">
            Call Now
          </Button>
          <Button
            href={COMPANY.whatsappUrl}
            variant="secondary"
            className="min-w-[180px] uppercase tracking-[0.12em]"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </Button>
          <Button to="/contact" variant="secondary" className="min-w-[180px] uppercase tracking-[0.12em]">
            Get a Quote
          </Button>
        </div>
        <a
          href={COMPANY.phoneTel}
          className="mt-8 inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-white"
        >
          <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
          {COMPANY.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
