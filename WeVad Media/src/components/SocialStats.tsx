import React from 'react';

// You can replace these with actual imported icons or <img src="..." />
const stats = [
  { icon: '/instagram.png', label: '500k+' },
  { icon: '/youtube.png', label: '400k+' },
  { icon: '/linkedin.png', label: '50k+' },
  { icon: '/fb.png', label: '750k+' },
  { icon: '/views.png', label: '30M+' },
];

const SocialStats = () => {
  return (
    <section className="py-10 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-xl backdrop-blur-md text-white text-xl font-semibold transition transform hover:scale-105">
            <img src={stat.icon} alt="" className="w-12 h-12" />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialStats;
