import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Target, 
  Palette, 
  Share2, 
  Camera, 
  Code, 
  Search
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      features: ["Market Research", "Campaign Planning", "Performance Tracking", "ROI Optimization"],
      color: "from-blue-500 to-indigo-800"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Branding & Logo Design",
      description: "Create memorable brand identities that resonate with your audience and differentiate your business.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      color: "from-purple-500 to-pink-800"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Build and engage your community across all major social media platforms with strategic content.",
      features: ["Content Planning", "Community Management", "Social Advertising", "Analytics"],
      color: "from-green-500 to-green-800"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Content Creation",
      description: "High-quality photo, video, and written content that tells your story and engages your audience.",
      features: ["Photography & Video", "Copywriting", "Graphic Design", "Content Strategy"],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Design & Development",
      description: "Modern, responsive websites that provide exceptional user experiences and drive conversions.",
      features: ["Responsive Design", "E-commerce", "CMS Development", "Optimization"],
      color: "from-indigo-500 to-blue-800"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO & SEM",
      description: "Improve your online visibility and drive qualified traffic through search engine optimization.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Google Ads"],
      color: "from-yellow-500 to-red-700"
    }
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and drive meaningful results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;