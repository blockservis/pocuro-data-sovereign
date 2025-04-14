
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicyContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to protecting your privacy and personal data.
            </p>
          </div>
        </section>
        
        {/* Content section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-pocuro-dark-slate shadow-md rounded-lg p-8">
            <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
              <h2>1. Introduction</h2>
              <p>
                At Pocuro, privacy isn't just a feature—it's our foundation. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
              </p>
              <p>
                We've designed our services with privacy as the primary consideration, employing techniques like local-first data storage, end-to-end encryption, and zero-knowledge systems whenever possible.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                <strong>Account Information:</strong> When you create an account, we collect your email address and optional display name.
              </p>
              <p>
                <strong>Usage Information:</strong> We collect anonymous usage data to improve our services, such as how often features are used and general user behavior patterns. This data is anonymized and aggregated.
              </p>
              <p>
                <strong>Technical Information:</strong> We collect information about your device, operating system, browser type, and IP address for service optimization and security purposes.
              </p>
              <p>
                <strong>User Content:</strong> Most of your content (documents, notes, files, etc.) stays on your device by default. We only process and store content on our servers when specifically required by features you choose to use.
              </p>
              
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Authenticate your account and maintain your security</li>
                <li>Send important notices and updates about our services</li>
                <li>Respond to your requests and support needs</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Detect and prevent fraud and abuse</li>
              </ul>
              
              <h2>4. Local-First Approach</h2>
              <p>
                Pocuro implements a local-first approach to data handling, which means:
              </p>
              <ul>
                <li>Your data is stored locally on your device by default</li>
                <li>Many AI features process data directly on your device</li>
                <li>Data only leaves your device when you explicitly choose to use cloud-based features or synchronization</li>
                <li>When synchronization is enabled, we use end-to-end encryption</li>
              </ul>
              
              <h2>5. Data Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul>
                <li>With service providers who help us operate our business</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
              <p>
                All service providers we use are bound by data protection agreements and are required to maintain the confidentiality and security of your information.
              </p>
              
              <h2>6. Data Security</h2>
              <p>
                We implement advanced security measures to protect your personal information:
              </p>
              <ul>
                <li>End-to-end encryption for synchronized data</li>
                <li>Zero-knowledge encryption for sensitive vaults</li>
                <li>Strong authentication mechanisms</li>
                <li>Regular security audits and testing</li>
              </ul>
              <p>
                While we implement strong security measures, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>
              
              <h2>7. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent for optional features</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@pocuro.com.
              </p>
              
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to provide you with our services and for legitimate business purposes, unless a longer retention period is required by law.
              </p>
              <p>
                You can delete your account at any time, which will result in the deletion of all your personal information from our systems, except where retention is required by law.
              </p>
              
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13, and we do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
              
              <h2>10. International Data Transfers</h2>
              <p>
                We may process your information in countries other than your country of residence. When we transfer your information internationally, we implement appropriate safeguards in accordance with applicable law.
              </p>
              
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and, where appropriate, sending you a notification.
              </p>
              
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@pocuro.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const PrivacyPolicy: React.FC = () => {
  return (
    <ThemeProvider>
      <PrivacyPolicyContent />
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
