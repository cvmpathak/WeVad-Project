import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Wevad Media transformed our entire digital presence. Their strategic approach and creative execution exceeded all expectations. We saw a 300% increase in qualified leads within just 3 months.",
      rating: 5,
      project: "Complete Digital Transformation"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthCorp Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The team at Wevad Media doesn't just deliver projects, they deliver results. Their data-driven approach to our social media campaigns generated an ROI that surpassed our wildest expectations.",
      rating: 5,
      project: "Social Media Campaign"
    },
    {
      name: "Sarah Johnson",
      role: "Founder",
      company: "Bella Boutique",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Working with Wevad Media was a game-changer for our brand. They created a visual identity that perfectly captures our essence and helped us connect with our target audience like never before.",
      rating: 5,
      project: "Brand Identity & Website"
    }
  ];



  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced the Wevad Media difference.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Quote className="h-16 w-16 text-blue-600 mx-auto mb-8" />
            <blockquote className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 leading-relaxed">
              "Wevad Media transformed our entire digital presence. Their strategic approach and creative execution 
              exceeded all expectations. We saw a 300% increase in qualified leads within just 3 months."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Jennifer Martinez"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Jennifer Martinez</div>
                <div className="text-gray-600">CEO, TechFlow Solutions</div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Testimonials;