
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${isDarkMode ? 'bg-[#1a1f2d] text-white border-t border-white/10' : 'bg-white text-gray-800 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <SocialLinks />
          <div className="col-span-1 md:col-span-3">
            <FooterLinks scrollToSection={scrollToSection} />
          </div>
        </div>
        
        <div className={`mt-12 pt-8 ${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'} text-center`}>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
            © {new Date().getFullYear()} Pocuro. All rights reserved. Privacy-first and proud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
