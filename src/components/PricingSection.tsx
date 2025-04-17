
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
  onButtonClick?: () => void;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  description,
  price,
  isPopular,
  features,
  buttonText,
  buttonVariant = 'default',
  onButtonClick
}) => {
  return (
    <div className={`border rounded-xl shadow-sm p-8 ${
      isPopular ? 'border-pocuro-blue/70 dark:border-pocuro-blue/50 ring-1 ring-pocuro-blue/30 dark:ring-pocuro-blue/20' : 'border-border'
    }`}>
      {isPopular && (
        <div className="py-1.5 px-4 rounded-full text-xs font-semibold bg-pocuro-blue/10 text-pocuro-blue dark:bg-pocuro-blue/20 w-fit mb-5">
          Most Popular
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2 min-h-[40px]">{description}</p>
        <div className="mt-5">
          <div className="text-3xl font-bold">{price}</div>
        </div>
        <ul className="mt-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-pocuro-blue h-5 w-5 mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`mt-8 w-full ${
            buttonVariant === 'default' 
              ? 'bg-pocuro-blue hover:bg-pocuro-blue/90 text-white' 
              : 'bg-transparent border-pocuro-blue/20 text-pocuro-charcoal dark:text-white hover:bg-pocuro-blue/10'
          }`}
          variant={buttonVariant}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('cta-section');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 md:px-8" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto mb-12">
          Choose the plan that works best for your needs with our straightforward pricing.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PricingTier 
            title="Personal"
            description="Perfect for individual users who value privacy."
            price="Free"
            buttonText="Get Started"
            buttonVariant="outline"
            onButtonClick={scrollToForm}
            features={[
              "Local-first data storage",
              "Core productivity tools",
              "Basic encrypted storage (2GB)",
              "Personal calendar",
              "Financial tracker",
              "1 device"
            ]}
          />
          
          <PricingTier 
            title="Pro"
            description="Ideal for professionals managing multiple projects."
            price="$9.99/mo"
            isPopular={true}
            buttonText="Get Started"
            onButtonClick={scrollToForm}
            features={[
              "Everything in Personal",
              "Advanced AI features",
              "10GB encrypted storage",
              "Document scanning",
              "Smart templates",
              "Up to 3 devices"
            ]}
          />
          
          <PricingTier 
            title="Family"
            description="Share securely with your family members."
            price="$14.99/mo"
            buttonText="Get Started"
            buttonVariant="outline"
            onButtonClick={scrollToForm}
            features={[
              "Everything in Pro",
              "Up to 5 user accounts",
              "50GB shared storage",
              "Family calendar",
              "Shared vault",
              "Parental controls"
            ]}
          />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto p-6 border border-dashed border-pocuro-blue/30 dark:border-pocuro-blue/20 rounded-xl bg-pocuro-blue/5 dark:bg-pocuro-blue/10">
          <h3 className="text-2xl font-bold text-pocuro-charcoal dark:text-white mb-3">Enterprise</h3>
          <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
            Need a custom solution with advanced security features and dedicated support?
          </p>
          <Button 
            variant="outline" 
            className="border-pocuro-blue text-pocuro-blue hover:bg-pocuro-blue/10"
            onClick={scrollToForm}
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">
            All plans include local-first processing, zero-knowledge encryption, and our privacy-first commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
