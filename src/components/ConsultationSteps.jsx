import { ClipboardList, MessageCircle, Ruler } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { COMPANY } from '../data/site';

const steps = [
  {
    icon: MessageCircle,
    title: 'Share your idea',
    text: 'Tell us about the home, villa or space you want to build or improve.',
  },
  {
    icon: Ruler,
    title: 'Discuss scope & budget',
    text: 'We talk through requirements, practical options and estimated costs.',
  },
  {
    icon: ClipboardList,
    title: 'Plan the next step',
    text: 'Once aligned, we move into planning and preparation with clear communication.',
  },
];

export default function ConsultationSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="GETTING STARTED"
          title="What Happens After You Enquire"
          subtitle="A simple path from your first message to a clear project discussion."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="h-full border border-black/8 p-6 text-center transition hover:border-gold">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                    <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-semibold tracking-[0.18em] text-gold">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-muted">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact">Get a Free Consultation</Button>
          <Button href={COMPANY.phoneTel} variant="outline">
            Call {COMPANY.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
