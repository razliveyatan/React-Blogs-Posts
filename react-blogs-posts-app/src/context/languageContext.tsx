import React, { createContext, useState } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
  }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};