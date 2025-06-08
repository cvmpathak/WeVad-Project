import React from 'react';
import { Link } from 'react-scroll';
import {
  ArrowRight,
  Play,
  Zap
} from 'lucide-react';

const HeaderHero: React.FC = () => {
  return (
    <header className="relative w-full h-screen text-white bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Creative
                  <span className="block bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
                    WeVad Media
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  We transform brands through innovative digital strategies, compelling content, and cutting-edge design solutions that drive real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button className="inline-flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-8">
                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Zap className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-2xl font-bold mb-2">Innovation Driven</h3>
                    <p className="text-gray-300">Crafting the future of digital experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderHero;
