import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Templates', path: '/templates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center space-x-2 group">
            {/* <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Zap className="h-6 w-6 text-white" />
            </div> */}
            <img
              src="/logo.png" // Replace with your actual logo URL
              alt="Wevad Media Logo"
              className="h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <span
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              
            >
              Wevad Media
            </span>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-md font-medium transition-all duration-200 hover:text-blue-600 relative group ${location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-900'
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl border mt-2 mb-4">
            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-gray-900 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${location.pathname === item.path ? 'text-blue-600 font-medium' : ''
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
