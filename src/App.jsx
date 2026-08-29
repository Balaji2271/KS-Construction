import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import MobileContactBar from './components/MobileContactBar.jsx';
// Eager-load Contact so "Get a Quote" navigates instantly (primary conversion path).
import Contact from './pages/Contact.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // HashRouter uses the URL hash for routes; only treat fragment ids as in-page anchors.
    if (hash && /^#[A-Za-z][\w-]*$/.test(hash)) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function PrefetchRoutes() {
  useEffect(() => {
    const warm = () => {
      import('./pages/Home.jsx');
      import('./pages/About.jsx');
      import('./pages/Services.jsx');
      import('./pages/Projects.jsx');
      import('./pages/ProjectDetails.jsx');
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(warm, { timeout: 2000 });
      return () => window.cancelIdleCallback?.(id);
    }

    const timer = window.setTimeout(warm, 400);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <PrefetchRoutes />
      <Navbar />
      <main id="main">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileContactBar />
    </>
  );
}
