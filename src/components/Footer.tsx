
import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-pocuro-dark-navy border-t border-pocuro-light-gray dark:border-pocuro-dark-slate">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-pocuro-blue dark:text-pocuro-aqua-blue" />
              <span className="text-xl font-bold text-pocuro-charcoal dark:text-white">Pocuro</span>
            </Link>
            <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-4">
              Privacy-first personal resource planner. Your data, your control.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-pocuro-charcoal dark:text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#features" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="/#how-it-works" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }}
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="/#pricing" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }}
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="/#roadmap" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('roadmap');
                  }}
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('testimonials');
                  }}
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-pocuro-charcoal dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/blog"
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Privacy Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-pocuro-charcoal dark:text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-pocuro-light-gray dark:border-pocuro-dark-slate text-center">
          <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
            © {new Date().getFullYear()} Pocuro. All rights reserved. Privacy-first and proud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
