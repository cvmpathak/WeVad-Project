import React from 'react';
import { Link } from 'react-scroll';

const HeaderHero: React.FC = () => {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden "
      style={{ backgroundImage: "url('/background.png')" }}>
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold px-10">
            <span className="text-white">We</span>
            <span className="bg-white text-black px-1 rounded-sm">Vad</span>
            <span className="text-xs ml-1 align-top">media</span>
          </div>
          <nav>
            <ul className="flex items-center space-x-6 text-sm">
              <li>
                <Link to="services" smooth={true} duration={500} className="text-blue cursor-pointer hover:text-blue-900">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} duration={500} className="cursor-pointer hover:text-blue-900">
                  Our Work
                </Link>
              </li>
              <li>
                <a href="/brochure.pdf" download className="cursor-pointer hover:text-blue-900">
                  Download Brochure
                </a>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  <button className="bg-brand-blue hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
                  style={{ backgroundColor: '#6C63FF', boxShadow: '0 0 10px rgba(108, 99, 255, 0.6)' }}>
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 pt-32 h-full relative z-20">
        <div className="max-w-xl text-left px-10">
          <h1 className="text-5xl font-extrabold mb-6">WeVad Media</h1>
          <p className="text-xl font-light text-gray-300 mb-6">
            Your Growth is <span className="text-green-400 font-large">Our Success.</span>
          </p>
          <a href="/brochure.pdf" download
            className="inline-block px-8 py-3 text-white font-semibold rounded-full shadow-lg transition duration-300"
            style={{ backgroundColor: '#6C63FF', boxShadow: '0 0 10px rgba(108, 99, 255, 0.6)' }}>
            Download Brochure
          </a>
        </div>
      </div>
    </header>

  );
};

export default HeaderHero;