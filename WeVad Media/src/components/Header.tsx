import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">BrandFlow</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;