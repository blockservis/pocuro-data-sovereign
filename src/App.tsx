import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import HelpCenter from "./pages/HelpCenter";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Auth from "./pages/Auth";
import IntentForm from "./pages/IntentForm";
import NotFound from "./pages/NotFound";
import DebugPage from "./pages/DebugPage";
import Careers from "./pages/Careers";
import PrivacyGuide from "./pages/PrivacyGuide";
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Apply public policies for RLS on initial load
    const applyPublicPolicies = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('applyPublicPolicies');
        if (error) {
          console.error('Error applying public policies:', error);
        } else {
          console.log('Public policies applied successfully:', data);
        }
      } catch (err) {
        console.error('Failed to invoke applyPublicPolicies function:', err);
      }
    };

    applyPublicPolicies();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/intent-form" element={<IntentForm />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy-guide" element={<PrivacyGuide />} />
                <Route path="/debug" element={<DebugPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
