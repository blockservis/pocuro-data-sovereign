
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from '@/components/ui/use-toast';
import { MicroformDialog } from './MicroformDialog';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const CTASection: React.FC = () => {
  const [showMicroform, setShowMicroform] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '' });
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFormValues(values);
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
        
        <div className="max-w-md mx-auto bg-white dark:bg-pocuro-dark-slate rounded-xl shadow-md p-8 border border-pocuro-light-gray dark:border-pocuro-dark-slate">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-pocuro-blue hover:bg-opacity-90"
              >
                Get Early Access
              </Button>
            </form>
          </Form>
        </div>
        
        <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray mt-4">
          By signing up, you agree to our <a href="/privacy-policy" className="text-pocuro-blue hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-pocuro-blue hover:underline">Terms of Service</a>.
        </p>
      </div>
      
      <MicroformDialog 
        open={showMicroform} 
        onOpenChange={setShowMicroform}
        initialName={formValues.name}
        initialEmail={formValues.email}
      />
    </section>
  );
};

export default CTASection;
