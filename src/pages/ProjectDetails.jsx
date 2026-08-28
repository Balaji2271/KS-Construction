import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import Button from '../components/Button.jsx';
import Lightbox from '../components/Lightbox.jsx';
import useSeo from '../hooks/useSeo.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [active, setActive] = useState(null);

  useSeo({
    title: project ? `${project.title} | KS Construction` : 'Project | KS Construction',
    description: project?.description,
  });

  if (!project) {
    return (
      <section className="container-site py-40 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-4 text-muted">This project may have been removed or the link is incorrect.</p>
        <div className="mt-8">
          <Button to="/projects" variant="dark">
            Back to Projects
          </Button>
        </div>
      </section>
    );
  }

  const lightboxItems = project.gallery.map((image, index) => ({
    image,
    title: `${project.title} — image ${index + 1}`,
    category: project.category,
    isSample: project.isSample,
  }));

  return (
    <>
      <section className="bg-ink pb-10 pt-32 text-white">
        <div className="container-site">
          <Link to="/projects" className="text-gold-light hover:underline">
            ← All projects
          </Link>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-white/80">
            {project.category} · {project.location} · {project.status}
          </p>
          {project.isSample ? (
            <p className="mt-4 inline-block bg-gold px-3 py-1 font-semibold text-ink">Sample placeholder project</p>
          ) : null}
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <p className="mt-8 text-lg leading-relaxed text-muted">{project.description}</p>
          </div>
          <aside className="h-fit border border-black/8 bg-white p-6">
            <h2 className="text-xl font-semibold">Project details</h2>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-sm font-semibold tracking-wide text-muted">Category</dt>
                <dd className="text-lg">{project.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold tracking-wide text-muted">Location</dt>
                <dd className="text-lg">{project.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold tracking-wide text-muted">Status</dt>
                <dd className="text-lg">{project.status}</dd>
              </div>
            </dl>
            <Button to="/contact" className="mt-8 w-full">
              Enquire About a Similar Project
            </Button>
          </aside>
        </div>

        <div className="container-site mt-12">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {lightboxItems.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActive(index)}
                className="overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover transition hover:scale-105 sm:h-52"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={lightboxItems}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() => setActive((i) => (i === 0 ? lightboxItems.length - 1 : i - 1))}
        onNext={() => setActive((i) => (i === lightboxItems.length - 1 ? 0 : i + 1))}
      />
    </>
  );
}
