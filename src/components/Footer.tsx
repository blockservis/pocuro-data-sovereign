
import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
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
    <footer className={`${isDarkMode ? 'bg-[#1a1f2d] text-white border-t border-white/10' : 'bg-white text-gray-800 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/b51bfe97-8e2b-4e28-96cd-b054392494f0.png" 
                alt="Pocuro Logo" 
                className="h-10 w-auto"
              />
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Pocuro</span>
            </Link>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              Privacy-first personal resource planner. Your data, your control.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}>
                <Twitter size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}>
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Product</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#features" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
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
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
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
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('testimonials');
                  }}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="/#roadmap" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('roadmap');
                  }}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/blog"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-guide"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Privacy Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/help-center"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about-us"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-pocuro-aqua-blue' : 'text-gray-600 hover:text-pocuro-blue'}`}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 ${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'} text-center`}>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
            © {new Date().getFullYear()} Pocuro. All rights reserved. Privacy-first and proud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
