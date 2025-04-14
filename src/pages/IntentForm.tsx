
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { User } from '@supabase/supabase-js';

const contributionOptions = [
  { id: 'use-product', label: 'I want to use the product' },
  { id: 'invest', label: 'I want to invest in Pocuro' },
  { id: 'join-community', label: 'I want to join the community' },
  { id: 'follow-updates', label: 'I want to follow Pocuro updates' },
  { id: 'partner-integrate', label: 'I want to partner/integrate with Pocuro' },
  { id: 'other', label: 'Other' },
];

const formSchema = z.object({
  contributionType: z.array(z.string()).nonempty("Please select at least one option"),
  otherContribution: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const IntentFormContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [previousIntent, setPreviousIntent] = useState<any>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contributionType: [],
      otherContribution: '',
      email: '',
      comments: '',
    },
  });

  useEffect(() => {
    // Check for user session
    const checkSession = async () => {
      setLoading(true);
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        navigate('/auth');
        return;
      }
      
      setUser(data.session.user);
      
      // Pre-fill the email field
      form.setValue('email', data.session.user.email || '');
      
      // Check for previous intent submission
      try {
        const { data: intentData, error } = await supabase
          .from('user_intents')
          .select('*')
          .eq('user_id', data.session.user.id)
          .order('created_at', { ascending: false })
          .limit(1);
          
        if (!error && intentData && intentData.length > 0) {
          setPreviousIntent(intentData[0]);
          
          // Pre-fill the form with previous submission
          form.setValue('contributionType', intentData[0].contribution_type);
          form.setValue('comments', intentData[0].comments || '');
          
          toast({
            title: "Previous submission found",
            description: "We've loaded your previous responses. Feel free to update them.",
          });
        }
      } catch (error) {
        console.error('Error fetching previous intent:', error);
      }
      
      setLoading(false);
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setUser(session.user);
      }
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, form]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const onSubmit = async (values: FormValues) => {
    if (!user) return;
    
    setSubmitting(true);
    
    try {
      // Process the contribution type array
      let contributionType = values.contributionType;
      
      // If "Other" is selected, add the custom input to the array
      if (values.contributionType.includes('other') && values.otherContribution) {
        contributionType = contributionType.filter(type => type !== 'other');
        contributionType.push(values.otherContribution);
      }
      
      // Submit to Supabase
      const { data, error } = await supabase
        .from('user_intents')
        .insert([{
          user_id: user.id,
          email: values.email,
          contribution_type: contributionType,
          comments: values.comments,
        }]);
        
      if (error) {
        throw error;
      }
      
      setShowSuccess(true);
      
      // Reset the form
      form.reset({
        contributionType: [],
        otherContribution: '',
        email: user.email || '',
        comments: '',
      });
      
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message || "An error occurred while submitting your response.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pocuro-blue mx-auto"></div>
            <p className="mt-4 text-pocuro-slate-gray dark:text-pocuro-cool-gray">Loading...</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 dark:bg-green-900 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold text-pocuro-charcoal dark:text-white">
                Thank you for your interest!
              </CardTitle>
              <CardDescription className="text-pocuro-slate-gray dark:text-pocuro-cool-gray text-lg">
                We'll be in touch soon.
              </CardDescription>
            </CardHeader>
            
            <CardFooter className="flex justify-center gap-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowSuccess(false)}
              >
                Submit Another Response
              </Button>
              <Button 
                className="bg-pocuro-blue hover:bg-opacity-90 text-white"
                onClick={() => navigate('/')}
              >
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-2xl font-bold text-pocuro-charcoal dark:text-white">
                  Tell us about your interest
                </CardTitle>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="text-pocuro-slate-gray hover:text-pocuro-charcoal dark:text-pocuro-cool-gray dark:hover:text-white"
                >
                  Sign Out
                </Button>
              </div>
              
              <CardDescription className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                {previousIntent 
                  ? "Update your preferences or add more information about how you'd like to engage with Pocuro." 
                  : "Let us know how you'd like to engage with Pocuro."}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-pocuro-charcoal dark:text-white">Email Address</FormLabel>
                        <FormControl>
                          <Input {...field} disabled className="bg-gray-100 dark:bg-gray-800" />
                        </FormControl>
                        <FormDescription>
                          This is your authenticated email address.
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-3">
                    <FormLabel className="text-pocuro-charcoal dark:text-white">
                      How would you like to contribute?
                    </FormLabel>
                    
                    <div className="space-y-3">
                      {contributionOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="contributionType"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    const updatedValue = checked
                                      ? [...field.value, option.id]
                                      : field.value?.filter(
                                          (value) => value !== option.id
                                        );
                                    field.onChange(updatedValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-pocuro-slate-gray dark:text-pocuro-cool-gray font-normal cursor-pointer">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    
                    {form.watch('contributionType').includes('other') && (
                      <FormField
                        control={form.control}
                        name="otherContribution"
                        render={({ field }) => (
                          <FormItem className="ml-7">
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Please specify"
                                className="max-w-sm"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {form.formState.errors.contributionType && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.contributionType.message}
                      </p>
                    )}
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-pocuro-charcoal dark:text-white">Additional Comments (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us more about your interest in Pocuro..."
                            className="resize-y min-h-[100px]"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const IntentForm: React.FC = () => {
  return (
    <ThemeProvider>
      <IntentFormContent />
    </ThemeProvider>
  );
};

export default IntentForm;
