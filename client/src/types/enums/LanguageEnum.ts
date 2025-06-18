// Enumeration representing possible languages
// Each language has a corresponding string representation
export enum LanguageEnum {
  RUSSIAN = 'Русский',
  ENGLISH = 'English',
}

const languageToLocale = {
  [LanguageEnum.RUSSIAN as string]: 'ru',
  [LanguageEnum.ENGLISH as string]: 'en',
};

export const getLocaleByLanguage = (language: string) => {
  return languageToLocale[language];
};
