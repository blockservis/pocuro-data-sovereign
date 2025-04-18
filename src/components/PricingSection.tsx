
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

interface PlanToggleProps {
  activeTab: 'personal' | 'teams';
  onChange: (tab: 'personal' | 'teams') => void;
}

const PlanToggle: React.FC<PlanToggleProps> = ({ activeTab, onChange }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-center gap-4 mb-12">
      <button
        onClick={() => onChange('personal')}
        className={`px-6 py-2 rounded-lg transition-all ${
          activeTab === 'personal' 
            ? 'bg-pocuro-blue text-white' 
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
        }`}
      >
        PocuroMe (Personal)
      </button>
      <button
        onClick={() => onChange('teams')}
        className={`px-6 py-2 rounded-lg transition-all ${
          activeTab === 'teams' 
            ? 'bg-pocuro-blue text-white' 
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
        }`}
      >
        PocuroBiz (Teams)
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'personal' | 'teams'>('personal');
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const scrollToForm = () => {
    const form = document.getElementById('cta-section');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const personalPlans = [
    {
      name: 'Starter',
      description: 'For individuals getting started',
      price: '$9',
      period: '/month',
      billing: 'Billed annually or 20% more monthly',
      features: [
        'Secure Document Vault',
        'Daily Planner',
        'Local AI Assistant',
        'Private-by-default setup'
      ]
    },
    {
      name: 'Growth',
      description: 'For power users and small teams',
      price: '$14',
      period: '/month',
      billing: 'Billed annually or 20% more monthly',
      isPopular: true,
      features: [
        'LifeCircle (Smart Contact Manager)',
        'Digital ID Manager',
        'Finance Manager',
        'HealthBuddy',
        'Offline Data Backup'
      ]
    },
    {
      name: 'Premium',
      description: 'For organizations with custom needs',
      price: '$49',
      period: '/month',
      billing: 'Billed annually or 20% more monthly',
      features: [
        'Full Encryption Vault',
        'Personal Branding Kit',
        'Monetization Coach',
        'Premium AI Access',
        'Auto Content Assistant'
      ]
    }
  ];

  const businessPlans = [
    {
      name: 'Starter (ERP)',
      description: 'For small businesses',
      price: '$49',
      period: '/month',
      billing: 'Per user, billed annually',
      features: [
        'Core ERP Modules',
        'Basic Automations',
        'Chat Assistant'
      ]
    },
    {
      name: 'Growth (ERP)',
      description: 'For growing businesses',
      price: '$129',
      period: '/month',
      billing: 'Per user, billed annually',
      isPopular: true,
      features: [
        'CRM, Payroll, Inventory',
        'Marketing Automation',
        'Business Analytics'
      ]
    },
    {
      name: 'Premium (ERP)',
      description: 'For enterprise needs',
      price: '$499+',
      period: '/month',
      billing: 'Per user, billed annually',
      features: [
        'Advanced Compliance Modules',
        'Custom Dashboards',
        'Premium Support + Training',
        'Advanced Integrations'
      ]
    }
  ];

  const currentPlans = activeTab === 'personal' ? personalPlans : businessPlans;
  
  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy" id="pricing">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Choose the Right Plan for You
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Privacy-first solutions for individuals and teams of all sizes.
        </p>

        <PlanToggle activeTab={activeTab} onChange={setActiveTab} />

        <div className="grid md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-xl ${
                plan.isPopular 
                  ? 'border-2 border-pocuro-blue bg-white dark:bg-gray-800/50' 
                  : 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pocuro-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{plan.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{plan.billing}</p>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToForm}
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-pocuro-blue hover:bg-pocuro-blue/90 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
                }`}
              >
                {`Choose ${plan.name.split(' ')[0]}`}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white border border-gray-200 dark:bg-gray-800/95 dark:border-gray-700">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-8">
            <div>
              <div className="bg-pocuro-blue text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Enterprise Solution
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {activeTab === 'personal' ? 'Pocuro Infinite' : 'Pocuro Architect'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {activeTab === 'personal' 
                  ? 'Take full control of your digital life—on your terms.'
                  : 'Complete business automation for enterprises.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {activeTab === 'personal' ? (
                  <>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Bespoke AI Setup (MindMate)
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Custom Privacy + Security Advisory
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Tailored Automations per Module
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Device-to-device Offline Sync System
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Full-scale business automation
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      White-label Deployment
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Custom ERP Integrations
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-pocuro-blue mr-3" />
                      Legacy Migration & Support
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Quote</h3>
              <Button
                onClick={scrollToForm}
                className="bg-pocuro-blue hover:bg-pocuro-blue/90 text-white"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
