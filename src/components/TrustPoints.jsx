import { Handshake, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const points = [
  {
    icon: Sparkles,
    title: 'Quality Workmanship',
    text: 'Focused on quality at every stage of construction.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    text: 'Clear communication throughout your project.',
  },
  {
    icon: Handshake,
    title: 'Customer First',
    text: 'Your requirements remain at the center of the project.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Execution',
    text: 'Planned and coordinated execution from start to finish.',
  },
];

export default function TrustPoints() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="Clear values. Careful construction."
          subtitle="A professional approach you can understand — without empty numbers or claims."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.06}>
                <article className="h-full border border-black/8 bg-cream p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-card">
                  <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold">{point.title}</h3>
                  <p className="mt-3 text-muted">{point.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
