
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface MicroformStep3Props {
  feedback: string;
  setFeedback: (feedback: string) => void;
}

export function MicroformStep3({ feedback, setFeedback }: MicroformStep3Props) {
  return (
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
  );
}
