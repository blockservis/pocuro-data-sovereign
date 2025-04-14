
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

const TermsOfServiceContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Last updated: April 14, 2025</p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Pocuro services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              Pocuro provides a privacy-first personal resource planner that helps users organize their finances, documents, and schedule while keeping their data secure through local processing and encryption.
            </p>
            
            <h2>3. Account Registration</h2>
            <p>
              To use certain features of our services, you may need to create an account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate information during registration</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
            </ul>
            
            <h2>4. Privacy and Data Security</h2>
            <p>
              Our Privacy Policy, available at pocuro.com/privacy-policy, describes how we collect, use, and protect your information. By using Pocuro, you agree to the practices described in our Privacy Policy.
            </p>
            
            <h2>5. User Responsibilities</h2>
            <p>When using Pocuro, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Attempt to gain unauthorized access to Pocuro services or systems</li>
              <li>Use Pocuro for any harmful, fraudulent, or deceptive purpose</li>
              <li>Interfere with the proper functioning of our services</li>
            </ul>
            
            <h2>6. Intellectual Property</h2>
            <p>
              Pocuro and its associated logos, software, and documentation are owned by us and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use our services for personal or internal business purposes.
            </p>
            
            <h2>7. Content Ownership</h2>
            <p>
              You retain all rights to your content stored in Pocuro. We do not claim ownership of your personal information or data.
            </p>
            
            <h2>8. Service Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time. We will provide reasonable notice of significant changes when possible.
            </p>
            
            <h2>9. Subscription and Payments</h2>
            <p>
              If you subscribe to our premium services:
            </p>
            <ul>
              <li>You agree to pay all applicable fees as described at the time of purchase</li>
              <li>Subscription fees are charged at the beginning of each billing period</li>
              <li>You can cancel your subscription at any time, effective at the end of the current billing period</li>
              <li>Refunds are provided in accordance with our Refund Policy and applicable laws</li>
            </ul>
            
            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Pocuro shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
            
            <h2>11. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without any warranty, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.
            </p>
            
            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of significant changes and obtain consent where required by law.
            </p>
            
            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@pocuro.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const TermsOfService: React.FC = () => {
  return (
    <ThemeProvider>
      <TermsOfServiceContent />
    </ThemeProvider>
  );
};

export default TermsOfService;
