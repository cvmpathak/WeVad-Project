import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const YoutubeIcon = FaYoutube as unknown as React.FC<{ size?: number }>;
const LinkedinIcon = FaLinkedin as unknown as React.FC<{ size?: number }>;
const InstagramIcon = FaInstagram as unknown as React.FC<{ size?: number }>;

const services = [
  {
    icon: <InstagramIcon size={50} />,
    title: 'Conquer Insta with Viral Content!',
    description: [
      'Short-form content is the future. At WeVad Media, we craft your journey to getting viral on Insta with end-to-end management.',
      'We provide in-house production and confident creators who excel at hooking audiences.',
    ],
    cta: 'Ready to WOW your follower with awesome reels? Let’s do this!',
  },
  {
    icon: <YoutubeIcon size={50} />,
    title: 'Rule YT with Storytelling!',
    description: [
      'Let your brand story resonate with your target audience through our creative storytelling.',
      'From detailed research, scripting, and high production quality to seamless editing and insightful analytics, we’ve got your back.',
    ],
    cta: 'Ready to turn your subscribers into loyal customers? Lights, camera, let’s engage!',
  },
  {
    icon: <LinkedinIcon size={50} />,
    title: 'Ace LinkedIn with Brand Persona!',
    description: [
      'Let’s make your brand standout with a full personalized profile optimization.',
      'We specialize in crafting creative banners, compelling descriptions and informative carousels.',
      'Our content includes strong CTA, strategic keywords, and engaging stories.',
    ],
    cta: 'Ready to turn likes into loyal customers? Let’s make this happen!',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 h-screen text-gray-800 overflow-hidden bg-white px-4 sm:px-8">
      <div className="relative z-20">
        <div className="text-center mb-16">
          <h3 className="text-lg italic text-gray-700">Our</h3>
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <div className="text-sm text-gray-600 space-y-2 mb-4">
                {service.description.map((text, idx) => (
                  <p key={idx}>
                    {text.includes('in-house') || text.includes('storytelling') || text.includes('informative carousels') ? (
                      <strong>{text}</strong>
                    ) : (
                      text
                    )}
                  </p>
                ))}
              </div>
              <p className="text-sm font-semibold text-blue-900">{service.cta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
