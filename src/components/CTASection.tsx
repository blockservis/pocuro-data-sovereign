
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const CTASection: React.FC = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    toast.success('Thank you for signing up! Check your inbox for more information.');
    setEmail('');
  };
  
  return (
    <section className="py-20 px-4 md:px-8 bg-pocuro-blue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Own Your Data & Simplify Your Life?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Get early access to Pocuro and be among the first to experience true data sovereignty.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-pocuro-slate-gray h-5 w-5" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-10 w-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="h-12 px-6 bg-white text-pocuro-blue hover:bg-opacity-90 font-medium flex items-center gap-2">
              Get Early Access <ArrowRight size={18} />
            </Button>
          </div>
        </form>
        
        <p className="text-sm mt-6 opacity-80">
          After signup, you'll receive email tips and can schedule a hands-on demo.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
