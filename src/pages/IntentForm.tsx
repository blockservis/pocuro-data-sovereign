import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast"

const IntentForm: React.FC = () => {
  // Update the state to use tuple type instead of string[]
  const [contributionType, setContributionType] = useState<[string, ...string[]]>(["I want to use the product"]);
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userId = localStorage.getItem('sb-getjbnslnwglazujjgxc-auth-user')?.slice(6, 42) || 'unknown';

      const response = await fetch('/api/submitIntent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          contribution_type: contributionType,
          comments,
          user_id: userId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your intent has been submitted.",
        })
        setEmail('');
        setContributionType(["I want to use the product"]);
        setComments('');
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: data.message || "Failed to submit intent. Please try again.",
        })
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to submit intent. Please try again.",
      })
    } finally {
      setLoading(false);
    }
  };

  const handleContributionTypeChange = (value: string) => {
    setContributionType(prev => {
      const newTypes = prev.includes(value)
        ? prev.filter(type => type !== value)
        : [...prev, value];
      
      // Ensure there's always at least one option selected
      return newTypes.length > 0 
        ? (newTypes as [string, ...string[]]) 
        : ["I want to use the product"] as [string, ...string[]];
    });
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Share Your Intent</CardTitle>
            <CardDescription>
              Let us know how you're planning to use Pocuro, and any specific features you're interested in.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Contribution Type</Label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="use-product"
                    checked={contributionType.includes("I want to use the product")}
                    onCheckedChange={() => handleContributionTypeChange("I want to use the product")}
                  />
                  <Label htmlFor="use-product">I want to use the product</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="contribute-code"
                    checked={contributionType.includes("I want to contribute code")}
                    onCheckedChange={() => handleContributionTypeChange("I want to contribute code")}
                  />
                  <Label htmlFor="contribute-code">I want to contribute code</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="provide-feedback"
                    checked={contributionType.includes("I want to provide feedback")}
                    onCheckedChange={() => handleContributionTypeChange("I want to provide feedback")}
                  />
                  <Label htmlFor="provide-feedback">I want to provide feedback</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="join-community"
                    checked={contributionType.includes("I want to join the community")}
                    onCheckedChange={() => handleContributionTypeChange("I want to join the community")}
                  />
                  <Label htmlFor="join-community">I want to join the community</Label>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                placeholder="Share any additional thoughts or suggestions..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <Button disabled={loading} onClick={handleSubmit}>
              {loading ? 'Submitting...' : 'Submit Intent'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntentForm;
