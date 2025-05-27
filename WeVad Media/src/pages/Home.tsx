import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import TeamSection from '../components/TeamSection';
import OurExpertiseSection from '../components/ExpertiesSection';
import Footer from '../components/Footer';
import SocialStats from '../components/SocialStats';
import ProblemsAndSolutions from '../components/ProblemAndSolutions';
import ClientCards from '../components/ClientCards';
import AboutWeVadMedia from '../components/AboutWeVadMedia';
import StatsSection from '../components/StatsSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ClientCards />
      <AboutWeVadMedia />
      
      <ProblemsAndSolutions />
      
      <ServicesSection />
      {/* <SocialStats /> */}
      <OurExpertiseSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;