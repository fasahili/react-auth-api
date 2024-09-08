import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import arTranslation from './ar/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    ar: {
      translation: arTranslation
    }
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
