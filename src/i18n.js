import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importez vos fichiers de traduction (JSON)
import translationFR from './locales/fr/translationn.json';
import translationAR from './locales/ar/translatinon.json';

const resources = {
  fr: {
    translation: translationFR
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Passe l'instance i18n à react-i18next
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut si la détection échoue
    debug: true, // Désactiver en production
    interpolation: {
      escapeValue: false, // React empêche déjà les attaques XSS
    },
  });

export default i18n;