import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'Understand your requirements and project vision.',
  },
  {
    number: '02',
    title: 'Planning & Estimation',
    text: 'Discuss project scope, requirements and estimated costs.',
  },
  {
    number: '03',
    title: 'Design & Preparation',
    text: 'Finalize plans, materials and execution requirements.',
  },
  {
    number: '04',
    title: 'Construction',
    text: 'Execute the project with quality and coordination.',
  },
  {
    number: '05',
    title: 'Handover',
    text: 'Complete final checks and hand over the finished space.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="PROCESS"
          title="From Vision to Reality"
          subtitle="A straightforward path from the first conversation to a finished space."
        />

        <div className="mt-12 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-6">
            <div className="absolute left-[10%] right-[10%] top-7 h-px bg-gold/40" aria-hidden="true" />
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-white font-heading text-lg font-semibold text-ink">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ol className="relative mt-10 space-y-0 border-l-2 border-gold/50 pl-8 lg:hidden">
          {steps.map((step, index) => (
            <li key={step.number} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[43px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                {step.number}
              </span>
              <Reveal delay={index * 0.04}>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
