import React from 'react';

  const team = [
    {
      name: "Aayush Rana",
      role: "Editing Manager",
      image: "./Ayush.jpg"
    },
    {
      name: "Hariom Pathak",
      role: "Director & Post-Production Lead",
      image: "./hariom.jpg"
    },
    {
      name: "Bimochan jena",
      role: "Head of Design",
      image: "./Bimochan.png"
    }
  ];

const TeamSection = () => {
    return (
        <div>
            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our diverse team of experts brings together years of experience in design,
                            marketing, and technology to deliver outstanding results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamSection;
