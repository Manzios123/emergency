import React, { createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';
import { translations } from './translations';
import type {Language} from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface PropelProviderProps {
  children: ReactNode;
}

export const PropelProvider: React.FC<PropelProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to English
        value = translations.en;
        for (const k of keys) {
          value = value?.[k];
        }
        break;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a PropelProvider');
  }
  return context;
};

export const useT = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useT must be used within a PropelProvider');
  }
  return context.t;
};