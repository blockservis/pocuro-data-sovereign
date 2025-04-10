
import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-pocuro-dark-navy border-t border-pocuro-light-gray dark:border-pocuro-dark-slate">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/38b3a7b3-fd1e-48cf-9e67-3897a21a123b.png" 
                alt="Pocuro Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-pocuro-charcoal dark:text-white">Pocuro</span>
            </div>
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
                <a href="#features" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-pocuro-charcoal dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">
                  Blog
                </a>
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
