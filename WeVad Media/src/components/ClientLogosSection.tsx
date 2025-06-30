import React from 'react';

interface CarouselItem {
  name: string;
  logoSrc: string; // URL to the logo image
}

interface InfiniteCarouselProps {
  items?: CarouselItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const InfiniteCarousel = ({ 
  items = [
    { name: "Fit X Home", logoSrc: "./ClientLogo/FitXHome.png" },
    { name: "KCAA", logoSrc: "./ClientLogo/KCAA.png" },
    { name: "NIFT", logoSrc: "./ClientLogo/NIFT.svg" },
    { name: "PAHNO", logoSrc: "./ClientLogo/PAHNO.jpg" },
    { name: "PIU", logoSrc: "./ClientLogo/PIU.png" }
  ], 
  title = "Trusted by Industry Leaders", 
  subtitle = "We're proud to work with innovative companies across various industries",
  className = ""
}: InfiniteCarouselProps) => {
  return (
    <section className={`py-16 bg-gray-50 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          <div className="flex animate-scroll space-x-28">
            {/* First set of logos */}
            {items.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-48 bg-white rounded-6xl shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={item.logoSrc} 
                  alt={item.name}
                  className="max-h-40 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {items.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={item.logoSrc} 
                  alt={item.name}
                  className="max-h-40 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default InfiniteCarousel;