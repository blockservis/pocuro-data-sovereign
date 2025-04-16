
import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface MicroformStep2Props {
  contributionTypes: string[];
  setContributionTypes: (types: string[]) => void;
}

export function MicroformStep2({ contributionTypes, setContributionTypes }: MicroformStep2Props) {
  const contributionOptions = [
    "I want to use the product",
    "I want to invest in Pocuro",
    "I want to help develop the ecosystem",
    "I want to join the community",
    "I want to follow Pocuro updates",
    "I want to partner/integrate with Pocuro"
  ];

  return (
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
  );
}
