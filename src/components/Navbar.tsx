import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 lg:py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span 
              className={`font-heading text-xl font-bold transition-colors ${
                isScrolled ? 'text-pastel-darkLavender' : 'text-pastel-darkLavender'
              }`}
            >
              Akshitha Alluri
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item)}
                className={`capitalize text-sm font-medium hover:text-pastel-darkLavender transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className="capitalize text-gray-700 text-sm font-medium hover:text-pastel-darkLavender transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;