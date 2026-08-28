import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden bg-ink text-white">
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="relative h-72 overflow-hidden sm:h-80">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <span className="absolute left-4 top-4 bg-white/95 px-3 py-1 text-sm font-semibold text-ink">
            {project.category}
          </span>
          {project.isSample ? (
            <span className="absolute right-4 top-4 bg-gold px-3 py-1 text-sm font-semibold text-ink">
              Sample
            </span>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-white/80">
              {project.location} · {project.status}
            </p>
            <span className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-light">
              View Project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
