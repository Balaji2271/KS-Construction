import { services } from '../data/services';
import Button from './Button.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import ServiceCard from './ServiceCard.jsx';

export default function ServicesSection({ limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="SERVICES"
            title="Our Construction Services"
            subtitle="Practical construction solutions designed around your requirements."
          />
          <Button to="/services" variant="outline" className="shrink-0">
            All Services
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
