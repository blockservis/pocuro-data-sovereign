
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

const CTASection: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  
  const onSubmit = (data: FormValues) => {
    // Here we would normally connect to Supabase to store the email
    console.log("Submitting email to database:", data.email);
    
    toast.success('Thank you for signing up! Check your inbox for more information.');
    form.reset();
  };
  
  return (
    <section className="py-20 px-4 md:px-8 bg-pocuro-blue text-white" id="cta-section">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Own Your Data & Simplify Your Life?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Get early access to Pocuro and be among the first to experience true data sovereignty.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-pocuro-slate-gray h-5 w-5" />
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-10 w-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 h-12"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-left text-white/80" />
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit" className="h-12 px-6 bg-white text-pocuro-blue hover:bg-opacity-90 font-medium flex items-center gap-2">
                Get Early Access <ArrowRight size={18} />
              </Button>
            </div>
          </form>
        </Form>
        
        <p className="text-sm mt-6 opacity-80">
          After signup, you'll receive email tips and can schedule a hands-on demo.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
