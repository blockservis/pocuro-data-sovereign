
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Lock, Github, Facebook, Apple } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AuthContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/intent-form');
      }
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/intent-form');
      }
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Sign up successful!",
        description: "Please check your email for verification.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error.message || "An error occurred during sign up.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Sign in successful!",
        description: "Welcome back to Pocuro!",
      });
      
      navigate('/intent-form');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message || "An error occurred during sign in.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: 'google' | 'facebook' | 'apple') => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/intent-form`
        }
      });
      
      if (error) {
        throw error;
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: `${provider} sign in failed`,
        description: error.message || "An error occurred during sign in.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-pocuro-charcoal dark:text-white">
                Welcome to Pocuro
              </CardTitle>
              <CardDescription className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                Get early access to our privacy-first personal resource planner.
              </CardDescription>
            </CardHeader>
            
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="you@example.com" 
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-sm text-pocuro-blue dark:text-pocuro-aqua-blue hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type="password" 
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                    
                    <div className="relative w-full">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-pocuro-light-gray dark:border-pocuro-dark-slate"></span>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleOAuth('google')}
                        disabled={loading}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="h-5 w-5">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleOAuth('facebook')}
                        disabled={loading}
                      >
                        <Facebook className="h-5 w-5 text-blue-600" />
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleOAuth('apple')}
                        disabled={loading}
                      >
                        <Apple className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardFooter>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email-signup">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="email-signup" 
                          type="email" 
                          placeholder="you@example.com" 
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password-signup">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password-signup" 
                          type="password" 
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          minLength={6}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 6 characters.
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white"
                      disabled={loading}
                    >
                      {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                    
                    <div className="relative w-full">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-pocuro-light-gray dark:border-pocuro-dark-slate"></span>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleOAuth('google')}
                        disabled={loading}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="h-5 w-5">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleOAuth('facebook')}
                        disabled={loading}
                      >
                        <Facebook className="h-5 w-5 text-blue-600" />
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleOAuth('apple')}
                        disabled={loading}
                      >
                        <Apple className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By signing up, you agree to our{' '}
                      <a href="/terms-of-service" className="text-pocuro-blue dark:text-pocuro-aqua-blue hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/privacy-policy" className="text-pocuro-blue dark:text-pocuro-aqua-blue hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const Auth: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthContent />
    </ThemeProvider>
  );
};

export default Auth;
