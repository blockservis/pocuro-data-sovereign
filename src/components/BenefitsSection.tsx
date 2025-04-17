
import React from 'react';
import { Brain, Lock, Sliders } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Brain size={40} className="text-pocuro-blue mb-4" />,
      title: "Local AI Engine",
      description: "Your personal data never leaves your device. All AI processing happens locally, ensuring complete privacy."
    },
    {
      icon: <Lock size={40} className="text-pocuro-blue mb-4" />,
      title: "Intelligent Organization",
      description: "Access advanced AI insights without sacrificing privacy. Organize your life on your terms."
    },
    {
      icon: <Sliders size={40} className="text-pocuro-blue mb-4" />,
      title: "Flexible Planning",
      description: "Toggle an online 'public' mode only when you want to share or sync. You control what data is shared."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center text-pocuro-charcoal dark:text-white">
          Why a Privacy-First?
        </h2>
        <p className="section-subtitle text-center text-pocuro-slate-gray dark:text-pocuro-cool-gray">
          In today's digital world, privacy isn't just a feature—it's a necessity.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-center text-center"
            >
              {benefit.icon}
              <h3 className="text-xl font-bold mb-3 text-pocuro-charcoal dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
