
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

const AboutUsContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Pocuro</h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <h2>Our Mission</h2>
            <p>
              At Pocuro, we believe that privacy should be a fundamental right, not a luxury. Our mission is to empower individuals with full control over their personal data while providing powerful tools for organization, productivity, and insight.
            </p>
            
            <h2>Why We Built Pocuro</h2>
            <p>
              In today's digital landscape, our personal information has become a commodity to be bought, sold, and exploited. Most productivity and planning tools require sending your sensitive data to cloud servers, where it can be vulnerable to breaches, subject to surveillance, or used for purposes you never consented to.
            </p>
            <p>
              We built Pocuro to challenge the assumption that you must sacrifice privacy for functionality. By leveraging advanced local processing and privacy-preserving technologies, we've created a platform that keeps your data on your device while still offering the intelligent features you expect from modern applications.
            </p>
            
            <h2>Our Team</h2>
            <p>
              Pocuro was founded by a team of privacy advocates, security engineers, and design thinkers who shared a vision of technology that serves people without exploiting them.
            </p>
            <p>
              Our diverse team brings together expertise from cryptography, artificial intelligence, user experience design, and personal productivity. United by a commitment to ethical technology, we're working to create tools that respect human autonomy and dignity.
            </p>
            
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Privacy by Design:</strong> We build privacy protection into every aspect of our product, not as an afterthought.
              </li>
              <li>
                <strong>User Sovereignty:</strong> We believe you should own your data and have complete control over how it's used.
              </li>
              <li>
                <strong>Transparency:</strong> We're open about how our technology works and never hide behind confusing jargon or misleading claims.
              </li>
              <li>
                <strong>Accessibility:</strong> Privacy-first technology should be available to everyone, not just technical experts.
              </li>
              <li>
                <strong>Continuous Innovation:</strong> We're committed to advancing the state of the art in privacy-preserving computing.
              </li>
            </ul>
            
            <h2>Join Our Mission</h2>
            <p>
              We're building more than just a product—we're building a movement for a more ethical approach to personal data. By choosing Pocuro, you're not only protecting your own privacy but also supporting a vision of technology that respects fundamental human rights.
            </p>
            <p>
              Sign up for early access today and be part of creating a future where privacy and powerful technology go hand in hand.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <ThemeProvider>
      <AboutUsContent />
    </ThemeProvider>
  );
};

export default AboutUs;
