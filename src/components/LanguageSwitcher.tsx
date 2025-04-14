
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  
  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
    setOpen(false);
  };
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <span className="sr-only">Switch language</span>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map(lang => (
          <DropdownMenuItem 
            key={lang.code}
            className={`flex items-center gap-2 ${lang.code === language ? 'bg-muted' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
