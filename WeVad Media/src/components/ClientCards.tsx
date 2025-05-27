import React from 'react';

const clients = [
  {
    name: 'Internshala',
    category: 'Education',
    image: '/gif/adobe-acrobat-reader.gif',
  },
  {
    name: 'GFG',
    category: 'Coding',
    image: '/gif/adobe-after-effects.gif',
  },
  {
    name: 'Coding Ninja',
    category: 'Coding',
    image: '/gif/adobe-bridge.gif',
  },
  {
    name: 'Kodnest',
    category: 'Coding',
    image: '/gif/adobe-dreamweaver.gif',
  },
  {
    name: 'Sahil',
    category: 'Canadian Lifestyle',
    image: '/gif/adobe-fireworks.gif',
  },
  {
    name: 'Hypertroph',
    category: 'Fitness',
    image: '/gif/adobe-illustrator.gif',
  },
  {
    name: 'Spectrum',
    category: 'JEE',
    image: '/gif/adobe-photoshop.gif',
  },
];

const ClientCards = () => {
  return (
    <section className="py-16 text-white text-center bg-brand-blue pb-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-14 ">Our Super Happy Clients</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl px-10 md:px-0 my-0 mb-0 mx-auto ">
        {clients.map((client, index) => (
          <div
            key={index}
            className="border border-blue-400 rounded-xl w-full h-64 flex flex-col justify-center items-center px-4 shadow-md bg-brand-lightblue"
          >
            <img
              src={client.image}
              alt={client.name}
              className="h-20 object-contain mb-4"
            />
            <h3 className="text-white text-lg font-bold">{client.name}</h3>
            <p className="text-gray-300 text-sm">{client.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientCards;
