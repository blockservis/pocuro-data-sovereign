import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfServiceContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Header section - updated to match FAQ style */}
        <section className="py-16 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pocuro-charcoal dark:text-white">
              Terms of Service
            </h1>
            <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto">
              The legal agreement between Pocuro and our users.
            </p>
          </div>
        </section>
        
        {/* Content section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-pocuro-dark-slate shadow-md rounded-lg p-8">
            <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Pocuro ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by Pocuro.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.
              </p>
              
              <h2>2. Communications</h2>
              <p>
                By creating an account, you agree to receive communications from us, including but not limited to emails, texts, and push notifications. You can opt-out of non-essential communications.
              </p>
              
              <h2>3. Privacy Policy</h2>
              <p>
                Our Privacy Policy, available at <a href="/privacy-policy" className="text-pocuro-blue dark:text-pocuro-aqua-blue hover:underline">Privacy Policy</a>, describes how we collect, use, and share your information. By using our services, you agree to our Privacy Policy.
              </p>
              
              <h2>4. Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password.
              </p>
              
              <h2>5. Intellectual Property</h2>
              <p>
                Our services and their original content, features, and functionality are and will remain the exclusive property of Pocuro and its licensors. Our services are protected by copyright, trademark, and other laws.
              </p>
              
              <h2>6. User-Generated Content</h2>
              <p>
                You retain all rights to the content you create, upload, or share through our services. By providing content to our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any medium and any format.
              </p>
              
              <h2>7. Data Storage and Processing</h2>
              <p>
                Pocuro employs a "local-first" approach to data storage and processing. This means that most of your data is stored and processed locally on your device. However, some features may require data to be transmitted to and stored on our servers or third-party servers. By using our services, you consent to these data storage and processing practices.
              </p>
              
              <h2>8. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use our services will immediately cease. If you wish to terminate your account, you may simply discontinue using our services or contact us to request account deletion.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall Pocuro, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
              </p>
              
              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at terms@pocuro.com.
              </p>
            </div>
          </div>
        </section>
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
