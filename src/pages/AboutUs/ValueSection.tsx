
import React from 'react';
import { Shield, Lock, Database, Users, MessageSquare, Heart, Sparkles } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
    <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">{title}</h3>
    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
      {description}
    </p>
  </div>
);

const ValueSection: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-pocuro-blue" />,
      title: "Privacy by Design",
      description: "We don't just add privacy—we start with it. Every feature begins with the question: "How can we make this private by default?""
    },
    {
      icon: <Lock className="h-6 w-6 text-pocuro-blue" />,
      title: "User Sovereignty",
      description: "You own your data. No exceptions, no compromise. We build tools that respect your fundamental right to privacy."
    },
    {
      icon: <Database className="h-6 w-6 text-pocuro-blue" />,
      title: "Local-First Computing",
      description: "Whenever possible, your data stays on your device—processed, encrypted, and synchronized locally."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-pocuro-blue" />,
      title: "Radical Transparency",
      description: "We're open about how our systems work. Ethical design means no hidden agendas or dark patterns."
    },
    {
      icon: <Users className="h-6 w-6 text-pocuro-blue" />,
      title: "Inclusive, Calm Design",
      description: "Our tools are made for real people, not power users. Clear, minimalist design ensures usefulness, not overwhelm."
    },
    {
      icon: <Heart className="h-6 w-6 text-pocuro-blue" />,
      title: "Sustainable Growth",
      description: "We grow with purpose. No VC-fueled invasions of privacy—just long-term, user-aligned value creation."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Our Values
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto">
            The principles that guide everything we build and do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
