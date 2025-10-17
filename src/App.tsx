import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WhoWeAre from './pages/WhoWeAre';
import Supporters from './pages/Supporters';
import OurWork from './pages/OurWork';
import Founder from './pages/Founder';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentPage(customEvent.detail);
      window.scrollTo(0, 0);
    };

    window.addEventListener('navigate', handleNavigate);

    return () => {
      window.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'who-we-are':
        return <WhoWeAre />;
      case 'founder':
        return <Founder />;
      case 'supporters':
        return <Supporters />;
      case 'our-work':
        return <OurWork />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
