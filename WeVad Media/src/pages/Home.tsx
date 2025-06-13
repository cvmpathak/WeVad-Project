import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import TeamSection from '../components/TeamSection';
// import Footer from '../components/Footer';
// import ClientCards from '../components/ClientCards';
import AboutWeVadMedia from '../components/AboutWeVadMedia';
import Testimonials from '../components/Testimonials';
import PortfolioSection from '../components/PortfolioSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutWeVadMedia />
      <ServicesSection />
      <PortfolioSection />
      {/* <ClientCards /> */}
      <Testimonials />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Home;