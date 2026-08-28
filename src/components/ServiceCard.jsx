import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Home;

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-black/8 bg-white transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift">
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <span className="absolute left-4 top-4 bg-ink px-3 py-1 text-sm font-semibold text-gold">
          {service.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Icon className="h-8 w-8 text-gold transition group-hover:-translate-y-0.5" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 flex-1 text-muted">{service.short}</p>
        <Link
          to="/services"
          className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition group-hover:text-gold"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
