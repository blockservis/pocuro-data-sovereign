
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Lock } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fixed image URLs for both light and dark modes
  const heroImage = theme === 'dark' 
    ? "/lovable-uploads/83bd9e99-b2ad-45ce-a501-abd59ed6775e.png" 
    : "/lovable-uploads/ca99a085-1159-4397-b177-e9097d915a65.png";

  return (
    <section className="pt-36 pb-16 px-4 md:px-8 bg-background" id="hero">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pocuro-charcoal dark:text-white">
            Take Control of Your Life with a <span className="text-pocuro-blue">Privacy-First</span> Personal Resource Planner
          </h1>
          
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-8">
            Secure, Local AI to Organize Your Finances, Health, and Documents—All in One Encrypted Hub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-pocuro-blue hover:bg-opacity-90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2"
              onClick={() => scrollToSection('cta-section')}
            >
              Get Early Access <ChevronRight size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              className="py-6 px-8 rounded-lg text-lg font-medium border-pocuro-light-gray dark:border-pocuro-dark-slate text-pocuro-charcoal dark:text-white"
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray">
              <Shield className="text-pocuro-blue" size={20} />
              <span>End-to-end encryption</span>
            </div>
            
            <div className="flex items-center gap-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray">
              <Lock className="text-pocuro-blue" size={20} />
              <span>100% Local Processing</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-xl border border-pocuro-light-gray dark:border-pocuro-dark-slate bg-white dark:bg-pocuro-dark-navy animate-fade-in-right">
          <div className="aspect-w-4 aspect-h-3 relative">
            <img 
              src={heroImage} 
              alt="Pocuro Security Illustration" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pocuro-blue/40 to-transparent opacity-60 dark:opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
