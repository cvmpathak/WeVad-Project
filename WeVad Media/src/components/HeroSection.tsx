import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react'; // Use any icon library you prefer

const HeaderHero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white bg-brand-blue"
      >

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center py-2 px-10">
            <span className="text-white">WeVad</span>
            <span className="text-xs bg-white text-black ml-1 px-1 rounded-sm">media</span>
          </div>

          {/* Hamburger Toggle */}
          <div className="md:hidden px-6 py-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm px-8">
            <Link to="services" smooth duration={500} className="hover:text-blue-300 cursor-pointer py-2">
              Our Services
            </Link>
            <Link to="work" smooth duration={500} className="hover:text-blue-300 cursor-pointer py-2">
              Our Work
            </Link>
            <a href="/brochure.pdf" download className="hover:text-blue-300 py-2">
              Download Brochure
            </a>
            <Link to="contact" smooth duration={500}>
              <button
                className="text-white px-4 py-2  rounded-full transition"
                style={{ backgroundColor: '#6C63FF', boxShadow: '0 0 10px rgba(108, 99, 255, 0.6)' }}
              >
                Contact Us
              </button>
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#001D21] text-white px-6 py-6 text-center space-y-6">
            <Link to="services" smooth duration={500} onClick={() => setIsMenuOpen(false)} className="block">
              Our Services
            </Link>
            <Link to="work" smooth duration={500} onClick={() => setIsMenuOpen(false)} className="block">
              Our Work
            </Link>
            <a
              href="/brochure.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-center items-center space-x-2 pb-6"
            >
              <Download size={18} />
              <span>Download Brochure</span>
            </a>
            <Link to="contact" smooth duration={500} onClick={() => setIsMenuOpen(false)}>
              <button className="text-white px-6 py-2 rounded-full font-medium"
              style={{ backgroundColor: '#6C63FF', boxShadow: '0 0 10px rgba(108, 99, 255, 0.6)' }}>
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="pt-30rem md:pt-0 flex flex-col lg:flex-row items-center justify-between container mx-auto h-full relative z-20">
        <div className="max-w-xl text-left sm:px-10">
          <h1 className="text-5xl sm:text-5xl font-extrabold mb-6">WeVad Media</h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 font-bold md:px-0 px-8">
            Your Growth is <span className="text-blue-200 font-extrabold">Our Success.</span>
          </p>
          <a
            href="/brochure.pdf"
            download
            className="inline-block md:mx-0 mx-16  px-8 py-3 text-white font-semibold rounded-full shadow-lg transition duration-300 bg-brand-lightblue"
            style={{ backgroundColor: '#6C63FF', boxShadow: '0 0 10px rgba(108, 99, 255, 0.6)' }}
          >
            Download Brochure
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
