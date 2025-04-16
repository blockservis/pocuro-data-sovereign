
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MailIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MicroformDialog } from '@/components/MicroformDialog';
import { useLanguage } from '@/components/LanguageProvider';

const CareersContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showMicroform, setShowMicroform] = useState(false);
  const { t } = useLanguage();
  
  const handleGetNotified = () => {
    setShowMicroform(true);
  };
  
  const scrollToOpportunities = () => {
    const opportunitiesSection = document.getElementById('opportunities-section');
    if (opportunitiesSection) {
      opportunitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Header section - updated to match FAQ style */}
        <section className="py-16 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pocuro-charcoal dark:text-white">
              Join the Privacy Revolution
            </h1>
            <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto">
              Build the future of personal data sovereignty with us.
            </p>
          </div>
        </section>
        
        {/* Coming Soon section */}
        <section className="py-24 px-4" id="opportunities-section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-pocuro-light-gray dark:border-pocuro-dark-slate"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-pocuro-dark-navy px-6 text-lg font-medium text-pocuro-blue dark:text-pocuro-aqua-blue">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pocuro-blue/5 to-pocuro-light-blue/10 dark:from-pocuro-blue/10 dark:to-pocuro-dark-navy border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-xl p-12 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pocuro-charcoal dark:text-white">
                We're Building Our Team
              </h2>
              
              <div className="mb-10">
                <button 
                  onClick={scrollToOpportunities} 
                  className="inline-block animate-bounce bg-pocuro-blue rounded-full p-4 text-white mb-6 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
              
              <p className="text-xl mb-10 text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto">
                Our careers page is under development, but we're already looking for passionate individuals who believe in privacy-first technology.
              </p>
              
              <div className="max-w-md mx-auto bg-white dark:bg-pocuro-dark-slate rounded-lg p-6 shadow-md border border-pocuro-light-gray dark:border-pocuro-dark-slate mb-10">
                <h3 className="text-xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
                  We Value
                </h3>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-start">
                    <span className="text-pocuro-blue mr-2">✦</span>
                    <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Privacy advocates who understand the importance of data sovereignty
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pocuro-blue mr-2">✦</span>
                    <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Engineers who can build elegant, secure, and scalable solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pocuro-blue mr-2">✦</span>
                    <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Designers who create intuitive experiences that respect users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pocuro-blue mr-2">✦</span>
                    <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Product thinkers who can reimagine how technology serves humans
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  className="bg-pocuro-blue hover:bg-opacity-90 text-white flex items-center gap-2"
                  onClick={handleGetNotified}
                >
                  <MailIcon size={18} />
                  <span>Get notified about opportunities</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <MicroformDialog 
        open={showMicroform} 
        onOpenChange={setShowMicroform}
        preSelectedOption="I want to help develop the ecosystem"
      />
      
      <Footer />
    </div>
  );
};

const Careers: React.FC = () => {
  return (
    <ThemeProvider>
      <CareersContent />
    </ThemeProvider>
  );
};

export default Careers;
