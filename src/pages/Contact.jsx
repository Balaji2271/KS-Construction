import { MessageCircle, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import { COMPANY } from '../data/site';
import useSeo from '../hooks/useSeo.js';

export default function Contact() {
  useSeo({
    title: 'Contact KS Construction | Get a Quote',
    description:
      'Call, WhatsApp or send an enquiry to KS Construction. Phone 8940740558. Let’s discuss your construction requirements.',
  });

  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.24em] text-gold-light">CONTACT</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let&apos;s Build Together</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Tell us about your home, villa or commercial space. We will respond with a clear next step.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <a
              href={COMPANY.phoneTel}
              className="block border border-black/8 bg-white p-7 transition hover:border-gold"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-gold">CALL US</p>
              <p className="mt-3 flex items-center gap-3 text-2xl font-semibold">
                <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
                {COMPANY.phoneDisplay}
              </p>
              <p className="mt-2 text-muted">Tap to call from your phone.</p>
            </a>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block border border-black/8 bg-white p-7 transition hover:border-gold"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-gold">WHATSAPP</p>
              <p className="mt-3 flex items-center gap-3 text-2xl font-semibold">
                <MessageCircle className="h-6 w-6 text-gold" aria-hidden="true" />
                Chat with us
              </p>
              <p className="mt-2 text-muted">Send photos, drawings or a short description of your project.</p>
            </a>
          </div>

          <div className="border border-black/8 bg-white p-6 sm:p-10">
            <h2 className="text-2xl font-semibold">Send Enquiry</h2>
            <p className="mt-2 mb-8 text-muted">
              Large, labelled fields — fill in what you know. We will take it from there.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
