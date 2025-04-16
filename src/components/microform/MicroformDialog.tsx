
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from '@/components/ui/use-toast';
import { MicroformStep1 } from './MicroformStep1';
import { MicroformStep2 } from './MicroformStep2';
import { MicroformStep3 } from './MicroformStep3';
import { useFormSubmit } from './useFormSubmit';

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
  const { toast } = useToast();
  
  const resetForm = () => {
    setStep(1);
    setName('');
    setEmail('');
    setContributionTypes(preSelectedOption ? [preSelectedOption] : []);
    setFeedback('');
  };
  
  const { handleSubmit, isSubmitting } = useFormSubmit(
    email,
    name,
    contributionTypes,
    feedback,
    () => {
      onOpenChange(false);
      resetForm();
    }
  );

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
            <MicroformStep1 
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          )}

          {step === 2 && (
            <MicroformStep2
              contributionTypes={contributionTypes}
              setContributionTypes={setContributionTypes}
            />
          )}

          {step === 3 && (
            <MicroformStep3
              feedback={feedback}
              setFeedback={setFeedback}
            />
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
