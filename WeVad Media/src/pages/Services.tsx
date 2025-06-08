import React from 'react';
import { 
  Target, 
  Palette, 
  Share2, 
  Camera, 
  Code, 
  BarChart, 
  Megaphone,
  Search,
  Monitor,
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      features: [
        "Market Research & Analysis",
        "Competitor Analysis",
        "Campaign Planning",
        "Performance Tracking",
        "ROI Optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Branding & Logo Design",
      description: "Create memorable brand identities that resonate with your audience and differentiate your business.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
        "Brand Positioning"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Share2 className="h-12 w-12" />,
      title: "Social Media Management",
      description: "Build and engage your community across all major social media platforms with strategic content.",
      features: [
        "Content Planning",
        "Community Management",
        "Social Media Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Content Creation",
      description: "High-quality photo, video, and written content that tells your story and engages your audience.",
      features: [
        "Photography & Videography",
        "Copywriting",
        "Graphic Design",
        "Video Editing",
        "Content Strategy"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Design & Development",
      description: "Modern, responsive websites that provide exceptional user experiences and drive conversions.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "CMS Development",
        "Website Optimization",
        "Maintenance & Support"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO & SEM",
      description: "Improve your online visibility and drive qualified traffic through search engine optimization.",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Google Ads Management",
        "Local SEO"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience through detailed consultation."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive strategy tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Execution",
      description: "We bring the strategy to life with creative execution and careful attention to detail."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization to ensure maximum performance and ROI."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Comprehensive digital solutions designed to elevate your brand and drive meaningful results.
              From strategy to execution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-8`}>
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge tools and technologies to deliver superior results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { icon: <Monitor className="h-12 w-12" />, name: "Web Design" },
              { icon: <Smartphone className="h-12 w-12" />, name: "Mobile Apps" },
              { icon: <BarChart className="h-12 w-12" />, name: "Analytics" },
              { icon: <Megaphone className="h-12 w-12" />, name: "Marketing" },
              { icon: <Camera className="h-12 w-12" />, name: "Content" },
              { icon: <Search className="h-12 w-12" />, name: "SEO Tools" }
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-200"
              >
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200 mb-3">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create a custom solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/work"
                className="inline-flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;