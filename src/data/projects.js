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
    location: 'Sample location',
    status: 'Sample project',
    isSample: true,
    image: images.projects.residence01,
    description:
      'Sample project for layout and photography. Replace this entry with a real KS Construction residential project, including the actual location, status and project description.',
    gallery: [images.projects.residence01, images.projects.residence01b, images.projects.residence02],
  },
  {
    slug: 'sample-modern-villa',
    title: 'Modern Villa Elevation',
    category: 'Villa',
    location: 'Sample location',
    status: 'Sample project',
    isSample: true,
    image: images.projects.villa01,
    description:
      'Sample villa study used to show how a finished home can be presented. Replace with a real villa project, drawings or completed photographs from KS Construction.',
    gallery: [images.projects.villa01, images.projects.villa01b, images.projects.villa01c, images.projects.villa02],
  },
  {
    slug: 'sample-commercial-workspace',
    title: 'Commercial Workspace',
    category: 'Commercial',
    location: 'Sample location',
    status: 'Sample project',
    isSample: true,
    image: images.projects.commercial01,
    description:
      'Sample commercial space used as a visual placeholder. Update this record with a real commercial construction project when one is ready to share.',
    gallery: [images.projects.commercial01, images.projects.commercial01b],
  },
  {
    slug: 'sample-home-renovation',
    title: 'Home Renovation Study',
    category: 'Renovation',
    location: 'Sample location',
    status: 'Sample project',
    isSample: true,
    image: images.projects.renovation01,
    description:
      'Sample renovation imagery. Replace with before-and-after photographs and a short description of an actual KS Construction remodeling project.',
    gallery: [images.projects.renovation01, images.projects.renovation01b, images.gallery.interior01],
  },
  {
    slug: 'sample-garden-villa',
    title: 'Garden-Facing Villa',
    category: 'Villa',
    location: 'Sample location',
    status: 'Sample project',
    isSample: true,
    image: images.projects.villa02,
    description:
      'Placeholder villa photography. Swap this image set and copy for a real KS Construction villa project when available.',
    gallery: [images.projects.villa02, images.gallery.villa01, images.gallery.villa02],
  },
  {
    slug: 'sample-independent-home',
    title: 'Independent Home',
    category: 'Residential',
    location: 'Sample location',
    status: 'Sample project',
    isSample: true,
    image: images.projects.residence02,
    description:
      'Sample independent home used to illustrate residential construction. Replace with a real project name, location and photographs.',
    gallery: [images.projects.residence02, images.gallery.house01, images.gallery.residential01],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
