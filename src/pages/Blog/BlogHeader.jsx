import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

export const BlogHeader = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  
  return (
    <div className="relative h-64 bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4">{t.title0}</h1>
        <p className="text-lg max-w-3xl mx-auto">{t.Description0}</p>
      </div>
    </div>
  );
};