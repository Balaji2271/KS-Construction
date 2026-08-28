import { useMemo, useState } from 'react';
import { PROJECT_CATEGORIES, projects } from '../data/projects';
import Button from './Button.jsx';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function ProjectsSection({ showFilters = false, limit }) {
  const [category, setCategory] = useState('All');

  const list = useMemo(() => {
    const filtered = category === 'All' ? projects : projects.filter((p) => p.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="PORTFOLIO"
          title="Our Projects"
          subtitle="Explore our work and construction projects."
        />

        {showFilters ? (
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {PROJECT_CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`min-h-11 rounded-sm px-4 text-[15px] font-semibold ${
                  category === item ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-mist'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {limit ? (
          <div className="mt-10">
            <Button to="/projects" variant="dark">
              View All Projects
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
