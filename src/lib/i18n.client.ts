"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from '../../public/locales/de/translation.json';
import en from '../../public/locales/en/translation.json';
import pl from '../../public/locales/pl/translation.json';


const resources = {
  de: { translation: de },
  en: { translation: en },
  pl: { translation: pl },
};

const supportedLngs = ['de', 'en', 'pl'];
let initialLng = 'en';
if (typeof window !== 'undefined') {
  const storedLng = localStorage.getItem('i18nextLng');
  if (storedLng && supportedLngs.includes(storedLng)) {
    initialLng = storedLng;
  }
}

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLng,
      fallbackLng: 'en',
      supportedLngs,
      interpolation: { escapeValue: false },
      detection: {
        order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;