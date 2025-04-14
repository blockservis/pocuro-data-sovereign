
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PocuroMePricingTiers = [
  {
    name: "Starter",
    price: "$9",
    description: "For individuals getting started",
    features: [
      "🔐 Secure Document Vault",
      "🗓️ Daily Planner",
      "🤖 Local AI Assistant",
      "🛡️ Private-by-default setup"
    ],
    popular: false,
    buttonText: "Choose Starter"
  },
  {
    name: "Growth",
    price: "$14",
    description: "For power users and small teams",
    features: [
      "👥 LifeCircle (Smart Contact Manager)",
      "🪪 Digital ID & Secure Sharing",
      "💸 Personal Finance Tracker",
      "❤️‍🩹 Health & Wellness Sync",
      "🔄 Offline Data Backup"
    ],
    popular: true,
    buttonText: "Choose Growth"
  },
  {
    name: "Premium",
    price: "$49",
    description: "For organizations with custom needs",
    features: [
      "🧰 Full Encryption Vault",
      "🌐 Personal Branding Kit",
      "💼 Monetization Coach",
      "🧠 Premium AI Access",
      "✍️ Auto Content Assistant"
    ],
    popular: false,
    buttonText: "Choose Premium"
  },
  {
    name: "Pocuro Infinite",
    price: "Custom Quote",
    description: "Take full control of your digital life—on your terms.",
    features: [
      "🧠 Bespoke AI Setup (MindMate)",
      "⚙️ Tailored Automations per Module",
      "🤝 One-on-One Expert Onboarding",
      "🔒 Custom Privacy + Security Advisory",
      "📡 Device-to-device Offline Sync System",
      "💼 Fixed-price packages from $2,500+"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const PocuroBizPricingTiers = [
  {
    name: "Starter (ERP)",
    price: "$49",
    description: "For small businesses",
    features: [
      "🧩 Core Business Tools",
      "🔁 Basic Workflow Automations",
      "💬 Chat Assistant"
    ],
    popular: false,
    buttonText: "Choose Starter ERP"
  },
  {
    name: "Growth (ERP)",
    price: "$129",
    description: "For growing businesses",
    features: [
      "🧾 CRM, Payroll & Inventory",
      "📣 Automated Marketing Campaigns",
      "📊 Smart Business Insights"
    ],
    popular: true,
    buttonText: "Choose Growth ERP"
  },
  {
    name: "Premium (ERP)",
    price: "Custom",
    description: "For enterprise needs",
    features: [
      "🌐 Advanced Integrations",
      "🔍 AI-Powered Analytics",
      "🏛️ Compliance & Governance",
      "🔧 White-Label Customization"
    ],
    popular: false,
    buttonText: "Contact Enterprise Sales"
  }
];

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
        
        <Tabs defaultValue="personal" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="personal">PocuroMe (Personal)</TabsTrigger>
              <TabsTrigger value="business">PocuroBiz (Teams)</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="personal" className="w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PocuroMePricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`
                    rounded-xl p-8 bg-white dark:bg-pocuro-dark-navy relative
                    ${tier.popular 
                      ? 'border-2 border-pocuro-blue shadow-lg' 
                      : 'border border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-lg transition-shadow'
                    }
                  `}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pocuro-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">{tier.name}</h3>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">{tier.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-pocuro-charcoal dark:text-white">{tier.price}</span>
                      {tier.price !== "Custom Quote" && (
                        <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray ml-2">/month</span>
                      )}
                    </div>
                    <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-2">
                      Billed annually or 20% more monthly
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">{feature.split(' ')[0]}</span>
                        <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                          {feature.split(' ').slice(1).join(' ')}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white">
                    {tier.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="business" className="w-full">
            <div className="grid md:grid-cols-3 gap-8">
              {PocuroBizPricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`
                    rounded-xl p-8 relative
                    ${tier.popular 
                      ? 'border-2 border-blue-700 dark:border-blue-600 shadow-lg bg-blue-50 dark:bg-blue-900/20' 
                      : 'border border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-lg transition-shadow bg-white dark:bg-pocuro-dark-navy'
                    }
                  `}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-700 dark:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">{tier.name}</h3>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">{tier.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-pocuro-charcoal dark:text-white">{tier.price}</span>
                      {tier.price !== "Custom" && (
                        <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray ml-2">/month</span>
                      )}
                    </div>
                    <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-2">
                      {tier.price !== "Custom" ? "Per user, billed annually" : "Custom contracts available"}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">{feature.split(' ')[0]}</span>
                        <span className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                          {feature.split(' ').slice(1).join(' ')}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${tier.popular ? 'bg-blue-700 dark:bg-blue-600' : 'bg-pocuro-blue'} hover:bg-opacity-90 text-white`}>
                    {tier.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
