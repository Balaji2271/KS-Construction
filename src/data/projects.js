import { images } from '../assets/images';

/**
 * Sample / placeholder project data.
 * Replace these entries with real KS Construction projects when available.
 * Set isSample to false once a project is a real completed or ongoing job.
 */
export const PROJECT_CATEGORIES = ['All', 'Residential', 'Villa', 'Commercial', 'Renovation'];

export const projects = [
  {
    slug: 'sample-contemporary-residence',
    title: 'Contemporary Family Residence',
    category: 'Residential',
    location: '',
    status: 'Residential project',
    isSample: true,
    image: images.projects.residence01,
    description:
      'A contemporary family home with clean lines, warm materials and carefully planned living spaces designed for everyday comfort.',
    gallery: [images.projects.residence01, images.projects.residence01b, images.projects.residence02],
  },
  {
    slug: 'sample-modern-villa',
    title: 'Modern Villa Elevation',
    category: 'Villa',
    location: '',
    status: 'Villa project',
    isSample: true,
    image: images.projects.villa01,
    description:
      'A modern villa elevation featuring balanced proportions, refined finishes and outdoor spaces that connect indoor living with the landscape.',
    gallery: [images.projects.villa01, images.projects.villa01b, images.projects.villa01c, images.projects.villa02],
  },
  {
    slug: 'sample-commercial-workspace',
    title: 'Commercial Workspace',
    category: 'Commercial',
    location: '',
    status: 'Commercial project',
    isSample: true,
    image: images.projects.commercial01,
    description:
      'A commercial workspace planned for clarity, durability and a professional atmosphere suited to modern business use.',
    gallery: [images.projects.commercial01, images.projects.commercial01b],
  },
  {
    slug: 'sample-home-renovation',
    title: 'Home Renovation Study',
    category: 'Renovation',
    location: '',
    status: 'Renovation project',
    isSample: true,
    image: images.projects.renovation01,
    description:
      'A renovation approach focused on updating layout, finishes and light while preserving the character of the existing home.',
    gallery: [images.projects.renovation01, images.projects.renovation01b, images.gallery.interior01],
  },
  {
    slug: 'sample-garden-villa',
    title: 'Garden-Facing Villa',
    category: 'Villa',
    location: '',
    status: 'Villa project',
    isSample: true,
    image: images.projects.villa02,
    description:
      'A garden-facing villa designed around natural light, outdoor views and comfortable living across private and shared spaces.',
    gallery: [images.projects.villa02, images.gallery.villa01, images.gallery.villa02],
  },
  {
    slug: 'sample-independent-home',
    title: 'Independent Home',
    category: 'Residential',
    location: '',
    status: 'Residential project',
    isSample: true,
    image: images.projects.residence02,
    description:
      'An independent home with a clear structure, practical planning and finishes chosen for longevity and everyday use.',
    gallery: [images.projects.residence02, images.gallery.house01, images.gallery.residential01],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
