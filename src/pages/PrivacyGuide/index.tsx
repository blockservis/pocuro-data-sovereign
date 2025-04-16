
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import PrinciplesSection from './PrinciplesSection';
import PrivacyTabsSection from './PrivacyTabsSection';
import ComplianceSection from './ComplianceSection';

const PrivacyGuideContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        <HeroSection />
        <PrinciplesSection />
        <PrivacyTabsSection />
        <ComplianceSection />
      </main>
      
      <Footer />
    </div>
  );
};

const PrivacyGuide: React.FC = () => {
  return (
    <ThemeProvider>
      <PrivacyGuideContent />
    </ThemeProvider>
  );
};

export default PrivacyGuide;
