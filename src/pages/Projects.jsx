import CTASection from '../components/CTASection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import useSeo from '../hooks/useSeo.js';

export default function Projects() {
  useSeo({
    title: 'Projects | KS Construction',
    description:
      'Explore sample construction project presentations from KS Construction. Replace with real project photography as work is completed.',
  });

  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.24em] text-gold-light">PROJECTS</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Our Projects</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Explore our work and construction projects.
          </p>
        </div>
      </section>
      <ProjectsSection showFilters />
      <CTASection />
    </>
  );
}
