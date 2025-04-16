
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-deep-blue text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Our Mission
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We're building a world where your personal data belongs to you—not corporations.
          Pocuro empowers individuals to plan, protect, and grow using AI—without sacrificing privacy, agency, or peace of mind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-pocuro-blue hover:bg-opacity-90 text-white">
            <Link to="/careers">Join Our Team</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Link to="/privacy-guide">Our Privacy Approach</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
