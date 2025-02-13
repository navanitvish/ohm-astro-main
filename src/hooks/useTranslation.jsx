import { useSelector } from 'react-redux';

export const useTranslation = () => {
  const { currentLanguage, translations } = useSelector(state => state.language);

  const t = (key) => {
    try {
      const keys = key.split('.');
      let translation = translations[currentLanguage];
      
      for (const k of keys) {
        translation = translation[k];
        if (!translation) throw new Error();
      }
      
      return translation;
    } catch {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
  };

  return { t, currentLanguage };
};