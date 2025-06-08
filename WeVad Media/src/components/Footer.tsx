import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Wevad Media</span>
            </div>
            <p className="text-gray-400">
              Full-service creative agency delivering innovative digital solutions that drive results and elevate brands.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61564424983011" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://www.instagram.com/grow.wevad/" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/wevad-media/" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                'Digital Marketing',
                'Branding & Logo Design',
                'Social Media Management',
                'Content Creation',
                'Web Development'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">hello@wevadmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">+91 9081089085</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">D&NH, Silvassa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Wevad Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;