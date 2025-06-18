// Translation config file that allows us to add internationalization easily

import translationRussian from './locales/ru/translation.json';
import translationEnglish from './locales/en/translation.json';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEnum } from './types/enums/LanguageEnum';

export const defaultNS = 'main';
export const resources = {
  [LanguageEnum.RUSSIAN]: {
    main: translationRussian,
  },
  [LanguageEnum.ENGLISH]: {
    main: translationEnglish,
  },
} as const;

i18next.use(initReactI18next).init({
  lng: LanguageEnum.ENGLISH,
  ns: ['main'],
  defaultNS,
  resources,
});
