import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';




// Benefits Section Component
const BenefitsSection = () => {

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const benefitsContent = {
    title: t.why,
    question: t.question,
    paragraphs: t.paragraph,
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-bold mb-6">
        {benefitsContent.title}
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
      </h2>
      
      <p className="text-center text-gray-800 mb-8">
        {benefitsContent.question}
      </p>
      
      <div className="space-y-6">
        {benefitsContent.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

// Promotional Banner Component
const PromotionalBanner = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const promotionalContent = {
    title: {
      start: t.start,
      highlight1: t.highlight1,
      middle: t.middle,
      highlight2: t.highlight2,
      end: t.end,
    },
    subtitle: t.subtitle,
    buttonText: t.buttonText,
  };
  return (
    <div className="bg-gradient-to-r from-pink-50 to-red-400 py-12 mt-8 max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">
              {promotionalContent.title.start}
              <span className="text-red-500">{promotionalContent.title.highlight1}</span>
              {promotionalContent.title.middle}
              <span className="text-red-500">{promotionalContent.title.highlight2}</span>
              {promotionalContent.title.end}
            </h3>
            
            <p className="text-gray-800 text-lg mb-6">
              {promotionalContent.subtitle}
            </p>
            
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              {promotionalContent.buttonText}
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-red-400 transform rotate-6 rounded-lg"></div>
              <img 
                src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/ads/indian-bride-ads.png" 
                alt="Successful businessman"
                className="relative z-10 rounded-lg shadow-lg max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const HoroscopeBenefits = () => {
  return (
    <div>
      <BenefitsSection />
      <PromotionalBanner />
    </div>
  );
};

export default HoroscopeBenefits;