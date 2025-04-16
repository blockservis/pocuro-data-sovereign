
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export function useFormSubmit(
  email: string,
  name: string,
  contributionTypes: string[],
  feedback: string,
  onSuccess: () => void
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      const { data: existingSignups, error: checkError } = await supabase
        .from('early_access_signups')
        .select('id')
        .eq('email', email)
        .maybeSingle();
      
      if (checkError) {
        console.error("Error checking existing signup:", checkError);
      }
      
      if (!existingSignups) {
        const { error: signupError } = await supabase
          .from('early_access_signups')
          .insert({
            email,
            name
          });

        if (signupError) {
          console.error("Signup insertion error:", signupError);
        }
      }

      const { error: intentError } = await supabase
        .from('user_intents')
        .insert({
          email,
          contribution_type: contributionTypes,
          comments: feedback
        });

      if (intentError) {
        console.error("Intent insertion error:", intentError);
        throw intentError;
      }

      toast({
        title: "Success!",
        description: "Thank you for your interest in Pocuro!"
      });

      onSuccess();
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit your response. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
}
