import React from 'react';

const teamMembers = [
    {
        name: 'Hariom Pathak',
        role: ['Branding Strategist', 'Direction & Production', 'Storyteller'],
        image: '/hariom.jpg',
    },
    {
        name: 'Sandeep Verma',
        role: ['Marketing & Sales', 'Relationship Manager', 'Operations'],
        image: '/sandeep.jpg',
    },
    {
        name: 'Piyush Singh',
        role: ['Content Marketing', 'Research & Analytics', 'Human Resource'],
        image: '/piyush.jpg',
    },
];

const TeamSection = () => {
    return (
        <div className="text-white py-20 px-4 md:px-10 bg-white">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-[#0F2B3E] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                        style={{ backgroundImage: `url(${member.image})` }}>
                        <img src={member.image} alt={member.name} className="w-full h-80 object-cover"/>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-[#32FF6A] mb-2">{member.name}</h3>
                            <ul className="text-gray-200 space-y-1">
                                {member.role.map((line, i) => (
                                    <li key={i} className="text-sm tracking-wide">{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
