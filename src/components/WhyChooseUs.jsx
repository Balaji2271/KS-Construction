import { CheckCircle2, Eye, Hammer, HeartHandshake, MessagesSquare, Sparkle } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const reasons = [
  {
    icon: Sparkle,
    title: 'Quality Focus',
    text: 'Attention to workmanship and finishing.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    text: 'Clear communication throughout the project.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    text: 'We listen carefully to understand your requirements.',
  },
  {
    icon: CheckCircle2,
    title: 'Practical Solutions',
    text: 'Solutions designed around your needs and budget.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    text: 'Focus on the details that complete your space.',
  },
  {
    icon: Hammer,
    title: 'End-to-End Support',
    text: 'Support from initial discussion through completion.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div className="container-site relative">
        <SectionHeading light title="Why Choose KS Construction?" eyebrow="OUR APPROACH" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.05}>
                <article className="h-full border border-white/10 bg-white/5 p-6 transition hover:border-gold">
                  <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 text-white/80">{reason.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
