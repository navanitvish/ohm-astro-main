
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const AstrologySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const content = {
    title: t.astrotitle1,
    subtitle: t.astrosubtitle1,
    introduction:t.astrointroduvtion1,
    moreInfo:t.astroMoreinfo,
    planetaryInfluencesTitle: t.astroplanetaryInfluencesTitle,
    planetaryInfo:
      t.astroplanetaryInfo,
    benefitsTitle: t.astrobenefitsTitle,
    benefitsInfo:
      t.astrobenefitsInfo,
    onlineServicesTitle: t.astroonlineServicesTitle,
    onlineServicesInfo:
      t.astroonlineServicesInfo,
    onlineServicesList: t.astroonlineServicesList,
    astrologyCategoriesTitle: t.cateastrologyCategoriesTitle,
    categories: [
      {
        title: t.catetitle1,
        description:
          t.catedescription1,
      },
      {
        title: t.catetitle2,
        description:
          t.catedescription2,
      },
      {
        title: t.catetitle3,
        description:
          t.catedescription3,
      },
      {
        title: t.catetitle4,
        description:
          t.catedescription4,
      },
    ],
    conclusion:
      t.conclusions,
  };

  return (
    <div className="bg-red-50 h-auto">
      <div className="max-w-7xl mx-auto px-4 py-16 bg-red-50">
        {/* Header Section */}
        <div
          className="p-6 cursor-pointer mb-6 space-y-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              {content.title}
            </h2>
            <ChevronDown
              className={`ml-4 transition-transform transform ${
                isOpen ? "rotate-180" : ""
              }`}
              size={30}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 text-center">
            {content.subtitle}
          </h3>
        </div>

        {/* Body Section */}
        {isOpen && (
          <div className="space-y-6 text-gray-800">
            <p>{content.introduction}</p>
            <p>{content.moreInfo}</p>

            <h4 className="text-xl font-semibold mt-6">
              {content.planetaryInfluencesTitle}
            </h4>
            <p>{content.planetaryInfo}</p>

            <h4 className="text-xl font-semibold mt-6">
              {content.benefitsTitle}
            </h4>
            <p>{content.benefitsInfo}</p>

            <h4 className="text-xl font-semibold mt-6">
              {content.onlineServicesTitle}
            </h4>
            <p>{content.onlineServicesInfo}</p>
            <ul className="list-disc pl-5 space-y-2">
              {content.onlineServicesList.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold mt-6">
              {content.astrologyCategoriesTitle}
            </h4>
            <div className="space-y-4">
              {content.categories.map((category, index) => (
                <div key={index}>
                  <h5 className="font-semibold">{category.title}</h5>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-6">{content.conclusion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologySection;

