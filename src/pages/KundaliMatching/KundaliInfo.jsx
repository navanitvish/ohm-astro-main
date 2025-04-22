import React from "react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";


// Reusable section title component
const SectionTitle = ({ title }) => (
  <div className="text-center mb-8">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-2">
      {title}
    </h2>
    <div className="w-32 h-0.5 bg-red-500 mx-auto"></div>
  </div>
);

// Bullet point component
const BulletPoint = ({ text }) => (
  <li className="flex items-start space-x-3 mb-3">
    <span className="flex-shrink-0 text-red-500 mt-1">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    </span>
    <span className="text-gray-700">{text}</span>
  </li>
);

// Section component for partner finding and low score sections
const Section = ({ title, introduction, points }) => (
  <div className="mb-16 bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <SectionTitle title={title} />
    {introduction && (
      <p className="text-gray-700 mb-8 leading-relaxed text-base">{introduction}</p>
    )}
    {points && (
      <ul className="space-y-2">
        {points.map((point, index) => (
          <BulletPoint key={index} text={point} />
        ))}
      </ul>
    )}
  </div>
);

// Dosha section component
const DoshaSection = ({ doshas }) => (
  <div className="mb-16 bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <SectionTitle title="KUNDALI MATCHING AND RELATED DOSHAS" />
    <p className="text-gray-700 mb-8 leading-relaxed">{doshas.introduction}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {doshas.types.map((dosha, index) => (
        <div key={index} className="bg-amber-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-amber-800 mb-2">{dosha.name}</h3>
          <p className="text-gray-700">{dosha.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// Matching types section component
const MatchingTypesSection = ({ matchingTypes }) => (
  <div className="mb-16 bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <SectionTitle title="DIFFERENCE BETWEEN KUNDALI MATCHING BY DATE OF BIRTH AND KUNDLI MATCHING BY NAME" />
    <p className="text-gray-700 mb-8">{matchingTypes.introduction}</p>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {matchingTypes.types.map((type, index) => (
        <div key={index} className="bg-pink-50 p-5 rounded-lg">
          <h3 className="font-bold text-xl text-pink-800 mb-3">{type.title}</h3>
          <p className="text-gray-700">{type.description}</p>
        </div>
      ))}
    </div>
  </div>
);



// Main component
const KundaliInfo = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const kundaliData = {
    doshas: {
      introduction:
        t.doshas_intro,
      types: t.doshas_types,
    },
    matchingTypes: {
      introduction:
        t.matching_intro,
      types: t.matching_types,
    },
    findingPartner: {
      title: t.finding_title,
      introduction:
        t.finding_intro,
      points: t.finding_points
    },
    lowScore: {
      title: t.lowScore_title,
      introduction:
       t.lowScore_intro,
      points: t.lowScore_points
    },
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
           {t.kundliMatchingTitle}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
           {t.kundliMatchingIntro}
          </p>
        </header>
        
        <div className="space-y-8">
          <Section
            title={kundaliData.findingPartner.title}
            introduction={kundaliData.findingPartner.introduction}
            points={kundaliData.findingPartner.points}
          />
          
          <Section
            title={kundaliData.lowScore.title}
            introduction={kundaliData.lowScore.introduction}
            points={kundaliData.lowScore.points}
          />
          
          <DoshaSection doshas={kundaliData.doshas} />
          
          <MatchingTypesSection matchingTypes={kundaliData.matchingTypes} />
        </div>
      </div>
    </div>
  );
};

export default KundaliInfo;