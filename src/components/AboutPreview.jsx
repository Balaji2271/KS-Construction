import { images } from '../assets/images';
import Button from './Button.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const points = ['Quality', 'Transparency', 'Attention to Detail'];

export default function AboutPreview() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={images.about.residence}
              alt="Modern residential architecture with clean lines and warm materials"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-0 max-w-xs border border-gold/40 bg-ink p-5 text-white sm:-right-6">
              <p className="text-sm tracking-[0.2em] text-gold">KS CONSTRUCTION</p>
              <p className="mt-2 text-lg leading-snug">Building with purpose, care and clear communication.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="ABOUT US" title="Building With Purpose" />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            KS Construction is a growing construction company focused on delivering quality residential and
            commercial spaces with reliable workmanship, transparent communication and attention to detail.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {points.map((item) => (
              <li key={item} className="border-l-2 border-gold bg-white px-4 py-3 font-semibold">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/about" variant="dark">
              Know More About Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
