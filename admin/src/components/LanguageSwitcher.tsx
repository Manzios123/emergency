import React from 'react';
import { useLanguage, useT } from './PropelProvider';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = useT();

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'rw', label: 'RW', name: 'Kinyarwanda' },
    { code: 'fr', label: 'FR', name: 'Français' }
  ] as const;

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-green-200 hover:border-green-400 transition-colors duration-200 bg-white/10 backdrop-blur-sm">
        <span className="text-sm font-medium text-green-900">
          {languages.find(lang => lang.code === language)?.label}
        </span>
        <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
              language === lang.code
                ? 'bg-green-50 text-green-700 font-medium'
                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
            } first:rounded-t-lg last:rounded-b-lg`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};