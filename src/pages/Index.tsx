
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SecuritySection from '@/components/SecuritySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

const IndexContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <IndexContent />
    </ThemeProvider>
  );
};

export default Index;
