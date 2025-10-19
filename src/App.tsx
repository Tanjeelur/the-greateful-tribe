import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WhoWeAre from './pages/WhoWeAre';
import Gallery from './pages/Gallery';
import OurWork from './pages/OurWork';
import Founder from './pages/Founder';
import Projects from './pages/Projects';

function App() {
  // Initialize from URL hash so refresh preserves the current page
  const getHashPage = () => {
    try {
      const h = window.location.hash.replace('#', '');
      return h || 'home';
    } catch (e) {
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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
  <Navigation currentPage={currentPage} onNavigate={navigateTo} />
      {renderPage()}
    </div>
  );
}

export default App;
