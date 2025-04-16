
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-deep-blue text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Privacy Guide
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Understanding how Pocuro protects your privacy at every step.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
