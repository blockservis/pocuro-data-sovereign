
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import ValueSection from './ValueSection';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';

const AboutUsContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        <HeroSection />
        <StorySection />
        <ValueSection />
        <TeamSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <ThemeProvider>
      <AboutUsContent />
    </ThemeProvider>
  );
};

export default AboutUs;
