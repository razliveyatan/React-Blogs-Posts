import i18n from 'i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import heTranslation from './locales/he.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  he: {
    translation: heTranslation,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['queryString', 'cookie','localStorage'],
      caches:['localStorage']      
    },
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;