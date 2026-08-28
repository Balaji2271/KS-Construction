import * as Icons from 'lucide-react';
import { services } from '../data/services';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import useSeo from '../hooks/useSeo.js';

export default function Services() {
  useSeo({
    title: 'Construction Services | KS Construction',
    description:
      'Residential, villa, commercial, renovation, interior finishing and turnkey construction services from KS Construction.',
  });

  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.24em] text-gold-light">SERVICES</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Our Construction Services</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Practical construction solutions designed around your requirements.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-site space-y-16">
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Home;
            const reverse = index % 2 === 1;
            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className={`grid items-center gap-8 overflow-hidden bg-white lg:grid-cols-2 ${
                    reverse ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="h-72 lg:h-full">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <p className="font-heading text-gold">{service.number}</p>
                    <Icon className="mt-4 h-8 w-8 text-gold" aria-hidden="true" />
                    <h2 className="mt-4 text-3xl font-semibold">{service.title}</h2>
                    <p className="mt-4 text-lg text-muted">{service.description}</p>
                    <div className="mt-6">
                      <Button to="/contact" variant="dark">
                        Enquire About This Service
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
