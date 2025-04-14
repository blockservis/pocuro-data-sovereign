
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

const PrivacyPolicyContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Last updated: April 14, 2025</p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <h2>Introduction</h2>
            <p>
              At Pocuro, privacy isn't just a feature—it's our core principle. This Privacy Policy explains how we collect, use, and protect your information when you use our services. Unlike most applications, Pocuro is designed with a local-first, privacy-preserving architecture where your personal data remains on your device by default.
            </p>
            
            <h2>Information We Collect</h2>
            <h3>Information You Provide to Us</h3>
            <p>
              When you create an account, we collect minimal information necessary for account creation, such as email address and a securely hashed version of your password. We do not require personal details like your real name or location.
            </p>
            
            <h3>Information We Do Not Collect</h3>
            <p>
              By design, Pocuro does not collect or have access to:
            </p>
            <ul>
              <li>The content of your documents, financial records, or other personal data you manage within the application</li>
              <li>Your encryption keys, which remain solely on your device</li>
              <li>Your browsing activity or usage patterns within the application</li>
            </ul>
            
            <h3>Technical Information</h3>
            <p>
              We collect limited technical information required to provide our services, including:
            </p>
            <ul>
              <li>Device information (operating system, device type) to optimize application performance</li>
              <li>Crash reports and error logs (with personal identifiers removed) to improve stability</li>
              <li>Anonymous usage statistics to help us improve our services</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the limited information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve Pocuro services</li>
              <li>Process transactions and manage your account</li>
              <li>Send you important service announcements and updates</li>
              <li>Respond to your requests and support needs</li>
            </ul>
            
            <h2>How We Store and Protect Your Information</h2>
            <p>
              Your personal data within Pocuro is primarily stored on your device, not our servers. For the limited account information we do store:
            </p>
            <ul>
              <li>We use industry-standard encryption and security measures</li>
              <li>We regularly review and update our security practices</li>
              <li>We limit access to personal information to authorized personnel only</li>
            </ul>
            
            <h2>Optional Cloud Backup and Synchronization</h2>
            <p>
              Pocuro offers optional encrypted cloud backup and synchronization. If you choose to enable these features:
            </p>
            <ul>
              <li>Your data is encrypted on your device before being transmitted to our servers</li>
              <li>We store only encrypted data that we cannot access or decrypt</li>
              <li>You maintain full control over your encryption keys and can revoke access at any time</li>
            </ul>
            
            <h2>Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, correct, or delete your account information</li>
              <li>Export your data in standard formats</li>
              <li>Opt out of non-essential communications</li>
              <li>Choose which features to use, including optional cloud services</li>
            </ul>
            
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any significant changes and obtain consent where required by law.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at privacy@pocuro.com.
            </p>
          </div>
        </div>
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
