import AboutPreview from '../components/AboutPreview.jsx';
import CTASection from '../components/CTASection.jsx';
import Gallery from '../components/Gallery.jsx';
import Hero from '../components/Hero.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import TrustPoints from '../components/TrustPoints.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import useSeo from '../hooks/useSeo.js';

export default function Home() {
  useSeo({
    title: 'KS Construction | Building Dreams, Creating Spaces',
    description:
      'KS Construction provides quality residential, villa and commercial construction solutions with a focus on reliable execution and customer satisfaction.',
  });

  return (
    <>
      <Hero />
      <TrustPoints />
      <AboutPreview />
      <ServicesSection />
      <ProjectsSection limit={3} />
      <WhyChooseUs />
      <ProcessTimeline />
      <Gallery />
      <CTASection />
    </>
  );
}
