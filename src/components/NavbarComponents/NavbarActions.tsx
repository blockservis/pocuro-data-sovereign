
// Update the file to include the handleGetEarlyAccess prop
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from '../LanguageProvider';

interface NavbarActionsProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  handleGetEarlyAccess: () => void;
}

interface MobileNavbarActionsProps extends NavbarActionsProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export const DesktopNavbarActions: React.FC<NavbarActionsProps> = ({ 
  toggleTheme, 
  isDarkMode,
  handleGetEarlyAccess 
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center gap-3">
      <LanguageSwitcher />
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={toggleTheme} 
        className="border-none"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      
      <Button 
        onClick={handleGetEarlyAccess}
        className="bg-pocuro-blue"
      >
        Get Early Access
      </Button>
    </div>
  );
};

export const MobileNavbarActions: React.FC<MobileNavbarActionsProps> = ({ 
  isDarkMode, 
  toggleTheme, 
  handleGetEarlyAccess,
  setMobileMenuOpen 
}) => {
  const { t } = useLanguage();
  
  const handleClick = () => {
    handleGetEarlyAccess();
    setMobileMenuOpen(false);
  };
  
  return (
    <div className="mt-4 flex flex-col space-y-2">
      <Button 
        onClick={handleClick}
        className="w-full bg-pocuro-blue"
      >
        Get Early Access
      </Button>
    </div>
  );
};
