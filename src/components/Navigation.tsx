import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'founder', label: 'Our Founder' },
    { id: 'projects', label: 'Projects' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#6B2C91] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-3 transition-transform hover:scale-105"
          >
            <img src="/TGT-LOGO-removebg.png" alt="TGT Logo" className="h-12 w-12" />
            <span className="text-2xl font-black text-[#E8C547]">The Grateful Tribe</span>
          </button>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-lg font-bold transition-all ${
                  currentPage === item.id
                    ? 'text-white border-b-4 border-[#E8C547]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#6B2C91] border-t border-[#5a2380]">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left text-lg font-bold py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
