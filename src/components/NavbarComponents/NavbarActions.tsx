
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from '../LanguageProvider';

interface NavbarActionsProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  handleGetEarlyAccess: () => void;
}

export const DesktopNavbarActions: React.FC<NavbarActionsProps> = ({ 
  toggleTheme, 
  isDarkMode, 
  handleGetEarlyAccess 
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
      
      <Button 
        className="bg-pocuro-blue hover:bg-opacity-90 text-white"
        onClick={handleGetEarlyAccess}
      >
        {t('common.getEarlyAccess')}
      </Button>
    </div>
  );
};

export const MobileNavbarActions: React.FC<NavbarActionsProps & { setMobileMenuOpen: (isOpen: boolean) => void }> = ({ 
  toggleTheme, 
  isDarkMode, 
  handleGetEarlyAccess,
  setMobileMenuOpen
}) => {
  return (
    <li className="pt-4">
      <Button 
        className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white"
        onClick={() => {
          handleGetEarlyAccess();
          setMobileMenuOpen(false);
        }}
      >
        Get Early Access
      </Button>
    </li>
  );
};
