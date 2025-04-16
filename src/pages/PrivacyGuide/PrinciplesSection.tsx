
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Database, Server, Eye } from 'lucide-react';

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description }) => (
  <Card className="bg-white dark:bg-pocuro-dark-slate border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-md transition-all">
    <CardContent className="p-6">
      <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">{title}</h3>
      <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
        {description}
      </p>
    </CardContent>
  </Card>
);

const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: <Lock className="h-6 w-6 text-pocuro-blue" />,
      title: "Zero-Knowledge",
      description: "We can't read your data—even if we wanted to. Your information is encrypted before it ever reaches our servers."
    },
    {
      icon: <Database className="h-6 w-6 text-pocuro-blue" />,
      title: "Local-First",
      description: "Your data stays on your device by default. We only sync what you explicitly choose to share."
    },
    {
      icon: <Server className="h-6 w-6 text-pocuro-blue" />,
      title: "On-Device AI",
      description: "Your sensitive data stays local with on-device AI processing for your most personal information."
    },
    {
      icon: <Eye className="h-6 w-6 text-pocuro-blue" />,
      title: "Full Transparency",
      description: "Our code is open for inspection, and we clearly communicate what data is used, where, and why."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-pocuro-dark-slate">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Our Privacy Principles
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray">
            At Pocuro, privacy isn't just a feature—it's our foundation. 
            Here's how we're different.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={index}
              icon={principle.icon}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
