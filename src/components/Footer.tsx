import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@TheGratefulTribe', label: 'YouTube' },
    { icon: Facebook, href: 'https://www.facebook.com/TheGratefulTribe', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    {
      icon: ({ size }: { size: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
      href: 'https://t.me/TheGratefulTribe',
      label: 'Telegram'
    },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-[#6B2C91] text-white">
      {/* Main navigation section - horizontal layout like acquisition.com */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        {/* Logo and main navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 mb-6 md:mb-0">
            <img src="/TGT-LOGO-removebg.png" alt="TGT Logo" className="h-8 w-8 sm:h-12 sm:w-12" />
            <span className="text-lg sm:text-2xl font-black text-[#E8C547]">The Grateful Tribe</span>
          </div>
          
          {/* Main Navigation - horizontal on all screens */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-base font-medium transition-all ${
                  currentPage === item.id
                    ? 'text-[#E8C547]'
                    : 'text-white/90 hover:text-[#E8C547]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation - horizontal scrollable */}
          <div className="md:hidden w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-4 min-w-max px-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-xs sm:text-sm whitespace-nowrap font-medium transition-all ${
                    currentPage === item.id
                      ? 'text-[#E8C547]'
                      : 'text-white/90 hover:text-[#E8C547]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with policy links and copyright - like acquisition.com */}
      <div className="border-t border-white/10 mt-2 sm:mt-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
          {/* Policy links */}
          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6 gap-y-2 mb-4">
            <a href="#" className="text-xs sm:text-sm text-white/80 hover:text-[#E8C547] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/80 hover:text-[#E8C547] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/80 hover:text-[#E8C547] transition-colors">
              Disclosure
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/80 hover:text-[#E8C547] transition-colors">
              DMCA Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/80 hover:text-[#E8C547] transition-colors">
              Do Not Sell My Info
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mb-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-white/20 hover:text-[#E8C547] transition-all transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            ))}
          </div>
          
          {/* Copyright and disclaimer */}
          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; {new Date().getFullYear()} The Grateful Tribe. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 max-w-4xl mx-auto px-2">
              Helping those with BIG hearts achieve BIG wallets. The Grateful Tribe's results are not typical and are not a guarantee of your success. Your results may vary depending on education, effort, application, experience, and background.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}