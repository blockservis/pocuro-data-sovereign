
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';
import { DesktopNavigationMenus, MobileNavigationMenu } from './NavbarComponents/NavigationMenus';
import { DesktopNavbarActions, MobileNavbarActions } from './NavbarComponents/NavbarActions';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleGetEarlyAccess = () => {
    scrollToSection('cta-section');
  };
  
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy border-b border-pocuro-light-gray dark:border-pocuro-dark-slate fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={isDarkMode ? "/lovable-uploads/b51bfe97-8e2b-4e28-96cd-b054392494f0.png" : "/lovable-uploads/37d086a4-c6cc-4a20-bbf6-f396cd5e9636.png"} 
            alt="Pocuro Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-pocuro-charcoal dark:text-white">Pocuro</span>
        </Link>
        
        {!isMobile ? (
          <div className="flex items-center gap-4">
            <DesktopNavigationMenus scrollToSection={scrollToSection} />
            <DesktopNavbarActions 
              toggleTheme={toggleTheme} 
              isDarkMode={isDarkMode}
              handleGetEarlyAccess={handleGetEarlyAccess}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-pocuro-dark-navy border-b border-pocuro-light-gray dark:border-pocuro-dark-slate p-4 shadow-lg">
          <MobileNavigationMenu 
            scrollToSection={scrollToSection} 
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <MobileNavbarActions 
            toggleTheme={toggleTheme} 
            isDarkMode={isDarkMode}
            handleGetEarlyAccess={handleGetEarlyAccess}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
