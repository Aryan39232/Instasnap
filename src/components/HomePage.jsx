import React, { useEffect } from 'react';
import './HomePage.css';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StripsSection from './sections/StripsSection';
import CaptureSection from './sections/CaptureSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FoundersSection from './sections/FoundersSection';
import FooterSection from './sections/FooterSection';

const HomePage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="home_page_container">
      <HeroSection />
      <AboutSection />
      <StripsSection />
      <CaptureSection />
      <TestimonialsSection />
      <FoundersSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
