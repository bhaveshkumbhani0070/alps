import translations from './translation.json';

export const languages = {
  en: 'en',
  sp: 'sp'
};

let currentLanguage = languages.en;

export const setLanguage = (language = '') => {
  if (languages[language]) {
    currentLanguage = language;
  } else {
    currentLanguage = languages.en;
  }
};

export const getLanguage = () => currentLanguage;

export const _t = (key = '') => {
  if (translations[key] && translations[key][currentLanguage]) {
    return translations[key][currentLanguage];
  } else {
    return key;
  }
};
