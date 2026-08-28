import { images } from '../assets/images';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import useSeo from '../hooks/useSeo.js';

const values = [
  {
    title: 'Quality',
    text: 'We treat workmanship as the foundation of every space we build.',
  },
  {
    title: 'Transparency',
    text: 'You should always know where the project stands and what comes next.',
  },
  {
    title: 'Attention to Detail',
    text: 'Finishing, alignment and material choices are given the time they need.',
  },
];

export default function About() {
  useSeo({
    title: 'About KS Construction | Building With Purpose',
    description:
      'KS Construction is a growing construction company focused on quality residential and commercial spaces, reliable workmanship and transparent communication.',
  });

  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.24em] text-gold-light">ABOUT KS CONSTRUCTION</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Building With Purpose
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            KS Construction is a growing construction company focused on delivering quality residential and
            commercial spaces with reliable workmanship, transparent communication and attention to detail.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.about.residence}
              alt="Completed modern home with landscaped frontage"
              className="h-[460px] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <SectionHeading title="A professional partner for your next space" />
            <p className="mt-6 text-lg text-muted">
              Whether you are planning a home, a villa or a commercial interior, we start by listening. The
              goal is a clear plan, coordinated execution and a finished space you can use with confidence.
            </p>
            <p className="mt-4 text-lg text-muted">
              We do not fill this page with invented years, awards or client lists. Our work and communication
              are meant to speak for themselves.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="dark">
                Discuss Your Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading title="What we hold to" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="border border-black/8 p-7">
                <h2 className="text-xl font-semibold">{value.title}</h2>
                <p className="mt-3 text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
