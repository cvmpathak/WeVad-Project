import React from 'react';

const services = [
  {
    title: 'Strategy',
    description: `Strategic guidance and competitive analysis to grow brand identity.`,
    bgImage: 'service1.jpg',
  },
  {
    title: 'Content Research',
    description: `Detailed value addition content that connects and sparks action.`,
    bgImage: 'service2.jpg',
  },
  {
    title: 'Video Production',
    description: `From concept to creation, we bring your vision to life on screen.`,
    bgImage: 'service3.jpg',
  },
  {
    title: 'Storytelling',
    description: `Connect emotionally with your audience through storytelling.`,
    bgImage: 'service4.jpg',
  },
  {
    title: 'Video Editing',
    description: `Turn your raw footages into captivating videos that tell stories.`,
    bgImage: 'service5.jpg',
  },
  {
    title: 'Graphic Design',
    description: `Turn ideas into stunning carousels, thumbnails and posters.`,
    bgImage: 'service6.jpg',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-white text-gray-800">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-lg italic text-gray-500">Our</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Experties
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 group-hover:bg-opacity-40" />
              </div>
              <div className="relative p-16 m-2 text-white z-10 h-full flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
