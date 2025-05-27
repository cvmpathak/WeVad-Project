import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r  text-white py-20 px-4 bg-brand-blue">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">
        
        <div className="text-center">
          <h2 className="text-5xl font-bold">200k+</h2>
          <p className="text-xl mt-2">Views</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold">20k+</h2>
          <p className="text-xl mt-2">Community</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold">5M+</h2>
          <p className="text-xl mt-2">Accounts Reached</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
