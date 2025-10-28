import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import PromoBar from './components/PromoBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import WhoWeAre from './pages/WhoWeAre';
import Gallery from './pages/Gallery';
import OurWork from './pages/OurWork';
import Founder from './pages/Founder';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import SEO from './pages/courses/SEO';
import ContentCreation from './pages/courses/ContentCreation';

function App() {
  // Initialize from URL hash so refresh preserves the current page
  const getHashPage = () => {
    try {
      const h = window.location.hash.replace('#', '');
      return h || 'home';
    } catch {
      return 'home';
    }
  };

  const [currentPage, setCurrentPage] = useState<string>(() => getHashPage());

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      const page = customEvent.detail || 'home';
      setCurrentPage(page);
      if (window.location.hash !== `#${page}`) {
        window.location.hash = page;
      }
      window.scrollTo(0, 0);
    };

    const handleHashChange = () => {
      setCurrentPage(getHashPage());
      window.scrollTo(0, 0);
    };

    window.addEventListener('navigate', handleNavigate);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('navigate', handleNavigate);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // navigation helper to pass to Navigation so clicks update the URL hash as well
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;

      case 'who-we-are':
        return <WhoWeAre />;
      case 'founder':
        return <Founder />;
      case 'gallery':
        return <Gallery />;
      case 'our-work':
        return <OurWork />;
      case 'projects':
        return <Projects />;
      case 'courses':
        return <Courses />;
      case 'courses/digital-marketing':
        return <DigitalMarketing />;
      case 'courses/seo':
        return <SEO />;
      case 'courses/content-creation':
        return <ContentCreation />;
      default:
        return <HomePage />;
    }
  };

  const showPromoBar = !currentPage.startsWith('courses');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {showPromoBar && (
        <PromoBar onNavigate={navigateTo} />
      )}
      <Navigation currentPage={currentPage} onNavigate={navigateTo} hasTopBar={showPromoBar} />
      <div className={`flex-grow ${showPromoBar ? 'pt-10' : ''}`}>
        {renderPage()}
      </div>
      <Footer currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}

export default App;
