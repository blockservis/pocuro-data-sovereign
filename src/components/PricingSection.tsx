
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Choose the Right Plan for You
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto">
            Privacy-first solutions for individuals and teams of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-xl p-8 bg-white dark:bg-pocuro-dark-navy hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Basic</h3>
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">For individuals getting started</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-pocuro-charcoal dark:text-white">$5</span>
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray ml-2">/month</span>
              </div>
              <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-2">
                Billed annually or $7/month
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Local AI organization</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Encrypted document storage (10GB)</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Finance tracking</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Email support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white">
              Choose Basic
            </Button>
          </div>
          
          {/* Pro Plan */}
          <div className="border-2 border-pocuro-blue rounded-xl p-8 bg-white dark:bg-pocuro-dark-navy shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pocuro-blue text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Pro</h3>
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">For power users and small teams</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-pocuro-charcoal dark:text-white">$12</span>
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray ml-2">/month</span>
              </div>
              <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-2">
                Billed annually or $15/month
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">All Basic features</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Advanced AI insights</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Encrypted document storage (50GB)</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Priority support</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Optional sync across devices</span>
              </li>
            </ul>
            
            <Button className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white">
              Choose Pro
            </Button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-xl p-8 bg-white dark:bg-pocuro-dark-navy hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Enterprise</h3>
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">For organizations with custom needs</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-pocuro-charcoal dark:text-white">$29</span>
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray ml-2">/user/month</span>
              </div>
              <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-2">
                Custom contracts available
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">All Pro features</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Unlimited storage</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Custom integrations</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-pocuro-emerald dark:text-pocuro-dark-emerald mt-0.5 mr-2 shrink-0" />
                <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">24/7 priority support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
