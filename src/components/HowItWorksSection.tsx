
import React from 'react';
import { Lock, Upload, ToggleRight, PlusCircle } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Lock className="h-12 w-12 text-white" />,
      title: "Install & Encrypt",
      description: "Zero-knowledge vault on your device",
      bgColor: "bg-pocuro-blue"
    },
    {
      icon: <Upload className="h-12 w-12 text-white" />,
      title: "Add Your Life",
      description: "Docs, budgets, tasks; local AI organizes them",
      bgColor: "bg-pocuro-blue/90"
    },
    {
      icon: <ToggleRight className="h-12 w-12 text-white" />,
      title: "Stay in Control",
      description: "Choose what remains private or goes online",
      bgColor: "bg-pocuro-blue/80"
    },
    {
      icon: <PlusCircle className="h-12 w-12 text-white" />,
      title: "Expand Anytime",
      description: "Upcoming modules: health tracking, journaling, etc.",
      bgColor: "bg-pocuro-blue/70"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-subtitle text-center">
          Getting started with Pocuro is simple and secure.
        </p>
        
        <div className="relative mt-20">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-pocuro-light-gray dark:bg-pocuro-dark-slate -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.bgColor} rounded-full p-5 mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-pocuro-charcoal dark:text-white">
                  {step.title}
                </h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
