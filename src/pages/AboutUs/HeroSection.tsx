
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  console.log('About Us Hero - Current theme:', theme); // Debug logging
  
  return (
    <section className={`py-16 px-4 md:px-8 ${isDarkMode ? 'bg-[#1a1f2d]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Mission
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          We're building a world where your personal data belongs to you—not corporations.
          Pocuro empowers individuals to plan, protect, and grow using AI—without sacrificing privacy, agency, or peace of mind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-pocuro-blue hover:bg-opacity-90 text-white">
            <Link to="/careers">Join Our Team</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            <Link to="/privacy-guide">Our Privacy Approach</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
