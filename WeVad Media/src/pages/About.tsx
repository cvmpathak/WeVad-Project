import React from 'react';
import { Users, Target, Award, Heart, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "We're passionate about what we do and it shows in every project we deliver."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes and your business goals in mind."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients as true partners in success."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "10+ years of experience in brand strategy and creative direction."
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in data-driven marketing campaigns and conversion optimization."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Award-winning designer specializing in user experience and visual identity."
    },
    {
      name: "David Park",
      role: "Technology Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Full-stack developer with expertise in modern web technologies."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Wevad Media</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We're a team of creative professionals dedicated to helping businesses thrive in the digital landscape. 
              Our passion for innovation and commitment to excellence drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth, enhance brand presence, 
                  and create meaningful connections with their audiences. We believe in the power of creativity 
                  combined with strategic thinking to deliver exceptional results.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Rocket className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600">
                  To be the leading creative agency that transforms how businesses connect with their customers 
                  in the digital age. We envision a future where every brand has the tools and strategies 
                  they need to succeed in an ever-evolving marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our work and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in design, 
              marketing, and technology to deliver outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Award className="h-16 w-16 text-white mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Awards & Recognition</h2>
            <p className="text-xl text-blue-100 mb-12">
              Our commitment to excellence has been recognized by industry leaders and clients alike.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Best Digital Agency 2023",
                "Creative Excellence Award",
                "Top Marketing Innovation"
              ].map((award, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Award className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">{award}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;