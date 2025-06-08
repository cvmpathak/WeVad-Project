import React from 'react';

const Portfolio = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Explore our showcase of successful projects and discover how we've helped businesses 
              transform their digital presence and achieve remarkable results.
            </p>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent mb-4">Coming Soon.....</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;