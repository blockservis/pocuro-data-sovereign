
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from '../LanguageProvider';
import { MicroformDialog } from '../MicroformDialog';

interface NavbarActionsProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  handleGetEarlyAccess?: () => void;
}

export const DesktopNavbarActions: React.FC<NavbarActionsProps> = ({ 
  toggleTheme, 
  isDarkMode,
  handleGetEarlyAccess
}) => {
  const { t } = useLanguage();
  const [showMicroform, setShowMicroform] = useState(false);
  
  const handleClick = () => {
    if (handleGetEarlyAccess) {
      handleGetEarlyAccess();
    } else {
      setShowMicroform(true);
    }
  };
  
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
        onClick={handleClick}
      >
        Get Early Access
      </Button>
      
      <MicroformDialog 
        open={showMicroform} 
        onOpenChange={setShowMicroform}
      />
    </div>
  );
};

export const MobileNavbarActions: React.FC<NavbarActionsProps & { setMobileMenuOpen: (isOpen: boolean) => void }> = ({ 
  toggleTheme, 
  isDarkMode, 
  setMobileMenuOpen,
  handleGetEarlyAccess
}) => {
  const [showMicroform, setShowMicroform] = useState(false);
  
  const handleClick = () => {
    setMobileMenuOpen(false);
    if (handleGetEarlyAccess) {
      handleGetEarlyAccess();
    } else {
      setShowMicroform(true);
    }
  };
  
  return (
    <>
      <li className="pt-4">
        <Button 
          className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white"
          onClick={handleClick}
        >
          Get Early Access
        </Button>
      </li>
      
      <MicroformDialog 
        open={showMicroform} 
        onOpenChange={setShowMicroform}
      />
    </>
  );
};
