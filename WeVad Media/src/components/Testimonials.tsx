import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aman Upadhyay",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "https://drive.google.com/file/d/1dsgEo5AlvcrfNOW5eZLalPPx84Y7n3EU/view?usp=drive_link",
      content: "We recently decided to run ads on Meta and needed a professional video to represent our brand.When we were referred to Wevad Media — and it turned out to be the best decision. From concept to execution, the entire process was smooth and well-organized.The shoot was efficient, and the editing was top-notch. If you're looking to create high-quality videos that truly elevate your business or social media presence, Wevad Media is the team to trust. Highly recommended!",
      rating: 5,
      project: "Complete Digital Transformation"
    },
    {
      name: "Soniya Tanwar",
      role: "Director in Krishna Cancer Aid Association",
      company: "GrowthCorp Inc.",
      image: "./Sonia.png",
      content: "We recently had the pleasure of working with Hariom Pathak from Wevad Media for our event at the KCA Marathon. The final video we received was absolutely outstanding and had a very professional touch. We're definitely looking forward to working with him again. If you're looking to capture your special moments with a high-quality, cinematic feel, I highly recommend Wevad Media — they truly deliver the finest results.",
      rating: 5,
      project: "Social Media Campaign"
    },
    {
      name: "Dr Kiran Patil",
      role: "Vice Chancellor and Dean of  PIU",
      company: "Plast India University",
      image: "./kiran.png",
      content: "It was a pleasure working with WeVad Media. Our collaboration went far beyond just shooting a video — it was a truly creative and strategic experience. Hariom brought fresh ideas, guided us on the right time to release content on social media, The entire video production process was seamless, highly professional, and creatively enriching. We wholeheartedly recommend partnering with WeVad for anyone looking to create impactful and engaging visual content.",
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
              "Wevad Media brought our brand to life with stunning video content. Their seamless process and creative vision helped us boost engagement and drive real results."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="./Aman.jpg"
                alt="Aman Upadhyay"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Aman Upadhyay</div>
                <div className="text-gray-600">Fitness coach & Founder of FitXHome India</div>
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