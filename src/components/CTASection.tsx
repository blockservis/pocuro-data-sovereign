
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { MicroformDialog } from './MicroformDialog';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showMicroform, setShowMicroform] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email required",
        description: "Please enter your email address.",
      });
      return;
    }
    
    setShowMicroform(true);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-pocuro-blue/10 to-pocuro-light-blue/10 dark:from-pocuro-dark-navy dark:to-pocuro-navy border-t border-pocuro-light-gray dark:border-pocuro-dark-slate" id="cta-section">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
          Ready to Take Control of Your Digital Life?
        </h2>
        <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto mb-8">
          Join the waitlist for early access to Pocuro, the future of privacy-first personal resource planning.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-pocuro-blue hover:bg-opacity-90 text-white px-8"
          >
            Get Early Access
          </Button>
        </form>
        
        <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-6">
          By signing up, you agree to our{' '}
          <Link to="/terms-of-service" className="text-pocuro-blue dark:text-pocuro-aqua-blue hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy-policy" className="text-pocuro-blue dark:text-pocuro-aqua-blue hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <MicroformDialog 
          open={showMicroform} 
          onOpenChange={setShowMicroform}
        />
      </div>
    </section>
  );
};

export default CTASection;
