import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${darkMode ? 'bg-gray-900/95 shadow-lg' : 'bg-white/95 shadow-md'}` 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#home" className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className={`${darkMode ? 'text-blue-400' : 'text-red-600'}`}>Raffique Muir </span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}> - Engineering Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
              ) : (
                <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} px-4 py-2 shadow-md`}>
          <ul className="space-y-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    darkMode 
                      ? 'text-white hover:bg-gray-800' 
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;