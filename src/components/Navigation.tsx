import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const menuItems = {
    fr: [
      { path: '/', label: 'Accueil' },
      { path: '/about', label: 'À Propos' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/services', label: 'Services' },
      { path: '/blog', label: 'Blog' },
      { path: '/contact', label: 'Contact' }
    ],
    en: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/services', label: 'Services' },
      { path: '/blog', label: 'Blog' },
      { path: '/contact', label: 'Contact' }
    ]
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8" />
              <span className="font-bold text-xl">BKR Studio</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1 text-gray-700 hover:text-black"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'fr' ? 'en' : 'fr');
                setIsOpen(false);
              }}
              className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-black"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;