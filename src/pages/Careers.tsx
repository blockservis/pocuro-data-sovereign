
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MailIcon } from 'lucide-react';

const CareersContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Privacy Revolution</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Build the future of personal data sovereignty with us.
            </p>
          </div>
        </section>
        
        {/* Coming Soon section */}
        <section className="py-24 px-4">
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
                <div className="inline-block animate-bounce bg-pocuro-blue rounded-full p-4 text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
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
              
              <Button className="bg-pocuro-blue hover:bg-opacity-90 text-white flex items-center gap-2">
                <MailIcon size={18} />
                <span>Get notified about opportunities</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
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
