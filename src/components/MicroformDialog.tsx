import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';

interface MicroformDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedOption?: string;
  initialEmail?: string;
  initialName?: string;
}

export function MicroformDialog({ 
  open, 
  onOpenChange, 
  preSelectedOption,
  initialEmail = '',
  initialName = ''
}: MicroformDialogProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [contributionTypes, setContributionTypes] = useState<string[]>(
    preSelectedOption ? [preSelectedOption] : []
  );
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
    if (initialName) setName(initialName);
    if (preSelectedOption && !contributionTypes.includes(preSelectedOption)) {
      setContributionTypes(prev => 
        prev.includes(preSelectedOption) ? prev : [...prev, preSelectedOption]
      );
    }
  }, [initialEmail, initialName, preSelectedOption]);

  const progress = (step / 3) * 100;

  const contributionOptions = [
    "I want to use the product",
    "I want to invest in Pocuro",
    "I want to help develop the ecosystem",
    "I want to join the community",
    "I want to follow Pocuro updates",
    "I want to partner/integrate with Pocuro"
  ];

  const handleNext = () => {
    if (step === 1 && (!name || !email)) {
      toast({
        variant: "destructive",
        title: "Required Fields",
        description: "Please fill in both name and email fields."
      });
      return;
    }
    if (step === 2 && contributionTypes.length === 0) {
      toast({
        variant: "destructive",
        title: "Selection Required",
        description: "Please select at least one option."
      });
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

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

      onOpenChange(false);
      setStep(1);
      setName('');
      setEmail('');
      setContributionTypes(preSelectedOption ? [preSelectedOption] : []);
      setFeedback('');
      
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join Pocuro</DialogTitle>
          <DialogDescription>
            Help shape the future of personal resource planning
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <Progress value={progress} className="mb-6" />
          
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label>How would you like to contribute?</Label>
              <div className="space-y-3">
                {contributionOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={contributionTypes.includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setContributionTypes([...contributionTypes, option]);
                        } else {
                          setContributionTypes(contributionTypes.filter(type => type !== option));
                        }
                      }}
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="feedback">Share your thoughts with us</Label>
                <Textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Please provide any feedback or tell us about your interest..."
                  className="h-32"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button
              onClick={step === 3 ? handleSubmit : handleNext}
              disabled={isSubmitting}
            >
              {step === 3 ? (isSubmitting ? 'Submitting...' : 'Submit') : 'Next'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
