
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  console.log('Privacy Guide Hero - Current theme:', theme); // Debug logging
  
  return (
    <section className={`py-16 px-4 md:px-8 ${isDarkMode ? 'bg-[#1a1f2d]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Privacy Guide
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Understanding how Pocuro protects your privacy at every step.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
