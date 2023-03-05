import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from "../src/locales/en/translation.json";
import translationUK from "../src/locales/uk/translation.json";

import Backend from 'i18next-http-backend';

const resources = {
   en: {
     translation: translationEN
   },
   uk: {
     translation: translationUK
   }
 };

i18n.use(Backend).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    resources,

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;