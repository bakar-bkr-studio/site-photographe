import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '../hooks/useAnalytics';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://i.imgur.com/hpQfzgY.png"
                alt="BKR Studio Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl">BKR Studio</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => trackEvent('Navigation', `Click ${item.label}`)}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => trackEvent('Navigation', 'Click Contact CTA')}
              className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-transform hover:scale-105"
            >
              Nous contacter
            </Link>
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
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-gray-700 hover:text-black"
                onClick={() => {
                  trackEvent('Navigation Mobile', `Click ${item.label}`);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => {
                trackEvent('Navigation Mobile', 'Click Contact CTA');
                setIsOpen(false);
              }}
              className="block px-3 py-2 mt-4 text-center text-white bg-black font-semibold hover:bg-gray-800 rounded-lg mx-2"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;