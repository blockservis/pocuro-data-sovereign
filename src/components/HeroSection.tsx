
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Lock } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-pocuro-charcoal dark:text-white">
            Take Control of Your Life with a <span className="text-pocuro-blue">Privacy-First</span> Personal Resource Planner
          </h1>
          
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-8">
            Secure, Local AI to Organize Your Finances, Health, and Documents—All in One Encrypted Hub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-pocuro-blue hover:bg-opacity-90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2">
              Get Early Access <ChevronRight size={20} />
            </Button>
            
            <Button variant="outline" className="py-6 px-8 rounded-lg text-lg font-medium border-pocuro-light-gray dark:border-pocuro-dark-slate dark:text-white flex items-center gap-2">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray">
              <Shield size={20} className="text-pocuro-blue" />
              <span>End-to-end encryption</span>
            </div>
            
            <div className="flex items-center gap-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray">
              <Lock size={20} className="text-pocuro-blue" />
              <span>100% Local Processing</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-xl border border-pocuro-light-gray dark:border-pocuro-dark-slate bg-white dark:bg-pocuro-dark-navy animate-fade-in-right">
          <div className="aspect-w-4 aspect-h-3 relative">
            <img 
              src="/lovable-uploads/f8e54ad3-26cb-42ac-881e-7e895dce4bdf.png" 
              alt="Pocuro Dashboard Preview" 
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
