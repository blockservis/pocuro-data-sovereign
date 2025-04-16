
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { MicroformDialog } from './MicroformDialog';

const CTASection: React.FC = () => {
  const [showMicroform, setShowMicroform] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email Required",
        description: "Please enter your email address to continue."
      });
      return;
    }
    
    setShowMicroform(true);
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-pocuro-blue/10 to-pocuro-light-blue/5 dark:from-pocuro-blue/20 dark:to-pocuro-dark-navy border-t border-pocuro-light-gray dark:border-pocuro-dark-slate" id="cta-section">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pocuro-charcoal dark:text-white">
          Ready to Take Control of Your Digital Life?
        </h2>
        
        <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto mb-12">
          Join our early access program and be the first to experience the future of privacy-focused personal management.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <Input 
              type="text" 
              placeholder="Your name" 
              className="md:flex-1 bg-white dark:bg-pocuro-dark-slate"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="md:flex-1 bg-white dark:bg-pocuro-dark-slate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="bg-pocuro-blue hover:bg-opacity-90"
          >
            Get Early Access
          </Button>
        </form>
        
        <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-4">
          By signing up, you agree to our <a href="/privacy-policy" className="text-pocuro-blue hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-pocuro-blue hover:underline">Terms of Service</a>.
        </p>
      </div>
      
      <MicroformDialog 
        open={showMicroform} 
        onOpenChange={setShowMicroform}
        initialName={name}
        initialEmail={email}
      />
    </section>
  );
};

export default CTASection;
