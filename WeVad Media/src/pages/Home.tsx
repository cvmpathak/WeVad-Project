import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import TeamSection from '../components/TeamSection';
import OurExpertiseSection from '../components/ExpertiesSection';
import Footer from '../components/Footer';
import SocialStats from '../components/SocialStats';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <SocialStats />
      <OurExpertiseSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;