
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy border-b border-pocuro-light-gray dark:border-pocuro-dark-slate fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/38b3a7b3-fd1e-48cf-9e67-3897a21a123b.png" 
            alt="Pocuro Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-pocuro-charcoal dark:text-white">Pocuro</span>
        </div>
        
        <div className="flex items-center gap-4">
          {!isMobile && (
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a href="#features" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </nav>
          )}
          
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button className="bg-pocuro-blue hover:bg-opacity-90 text-white">
            Get Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
