import React from "react";
import {
  Target,
  Users,
  Award,
  Star,
  Lightbulb,
  Heart,
  Rocket
} from 'lucide-react';

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

export default function AboutWeVadMedia() {
  return (
    <div>
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Wevad Media</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  At WeVad Media, we transform your online presence into a powerful brand asset. Every click, like, and share matters. 
                  We're not just content managers — we're digital storytellers curating your brand's destiny.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To empower businesses with innovative digital solutions that drive growth, enhance brand presence,
                    and create meaningful connections with their audiences.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Rocket className="h-8 w-8 text-orange-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    To be the leading creative agency that transforms how businesses connect with their customers
                    in the digital age.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8">
                <div className="h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Award Winning</h3>
                    <p className="text-gray-600  max-w-xs mx-auto">
                      Recognized for excellence in digital marketing and creative design
                    </p>
                    <div className="flex justify-center mt-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* V alues */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600">The principles that guide our work and define who we are</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl sqhadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div >
      </section>
    </div>
  );
} 