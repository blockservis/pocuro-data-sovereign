
import React from 'react';
import { FileText, PieChart, Calendar, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-pocuro-blue" />,
      title: "Secure Document Vault",
      description: "Encrypted offline storage with AI-powered document search and organization."
    },
    {
      icon: <PieChart className="h-10 w-10 text-pocuro-blue" />,
      title: "Finance & Budget Tracking",
      description: "Automatic expense logs and private financial insights that stay on your device."
    },
    {
      icon: <Calendar className="h-10 w-10 text-pocuro-blue" />,
      title: "Scheduling & Reminders",
      description: "Local, private calendar that keeps your appointments and reminders secure."
    },
    {
      icon: <Cloud className="h-10 w-10 text-pocuro-blue" />,
      title: "Optional Online Mode",
      description: "Cloud-based AI for public-facing tasks, only when you choose to enable it."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-pocuro-soft-white dark:bg-pocuro-deep-charcoal">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Core Features</h2>
        <p className="section-subtitle text-center">
          All the tools you need to organize your life, with privacy at the core.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border border-pocuro-light-gray dark:border-pocuro-dark-slate bg-white dark:bg-pocuro-dark-navy shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-pocuro-charcoal dark:text-white text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
