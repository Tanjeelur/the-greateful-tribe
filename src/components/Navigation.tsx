import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  hasTopBar?: boolean;
}

export default function Navigation({ currentPage, onNavigate, hasTopBar = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'who-we-are', label: 'Our Tribe' },
    { id: 'founder', label: 'Our Founder' },
    {
      id: 'courses',
      label: 'Courses',
      children: [
        { id: 'courses/seo', label: 'SEO' },
        { id: 'courses/digital-marketing', label: 'Digital Marketing' },
        { id: 'courses/content-creation', label: 'Content Creation' },
      ],
    },
    { id: 'projects', label: 'Partner with Us' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed ${hasTopBar ? 'top-10' : 'top-0'} left-0 right-0 bg-[#6B2C91] shadow-md z-50`}>
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
              item.children ? (
                <div key={item.id} className="relative group">
                  <button
                    className={`text-lg font-bold transition-all ${
                      currentPage === item.id
                        ? 'text-white border-b-4 border-[#E8C547]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-white text-[#6B2C91] rounded-xl shadow-lg py-2 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition">
                    {item.children.map((child: { id: string; label: string }) => (
                      <button
                        key={child.id}
                        onClick={() => handleNavigate(child.id)}
                        className="block w-full text-left px-4 py-2 font-semibold hover:bg-[#F9F5FF]"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
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
              )
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
              <div key={item.id}>
                <button
                  onClick={() =>
                    item.children
                      ? setOpenMobileDropdown(openMobileDropdown === item.id ? null : item.id)
                      : handleNavigate(item.id)
                  }
                  className={`block w-full text-left text-lg font-bold py-2 transition-colors ${
                    currentPage === item.id
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
                {item.children && openMobileDropdown === item.id && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.children.map((child: { id: string; label: string }) => (
                      <button
                        key={child.id}
                        onClick={() => handleNavigate(child.id)}
                        className="block w-full text-left text-base font-medium py-1 text-white/90 hover:text-white"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}
