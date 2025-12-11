import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Example translation import
import de from '../../public/locales/de/translation.json';
import en from '../../public/locales/en/translation.json';
import pl from '../../public/locales/pl/translation.json';

const resources = {
  de: { translation: de },
  en: { translation: en },
  pl: { translation: pl },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    supportedLngs: ['de', 'en', 'pl'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18n;
