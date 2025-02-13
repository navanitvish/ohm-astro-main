// astrodata.
// KundaliInfo.jsx
import React from "react";
import { kundaliData } from "../../components/content/astordata";

const Section = ({ title, introduction, points }) => (
  <div className="mb-12">
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-2">
        {title}
      </h2>
      <div className="w-32 h-0.5 bg-red-500 mx-auto"></div>
    </div>

    {introduction && (
      <p className="text-gray-700 mb-6 leading-relaxed">{introduction}</p>
    )}

    {points && (
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex space-x-4">
            <span className="flex-shrink-0 text-gray-800">
              <svg
                className="w-2.5 h-2.5 mt-2"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
            </span>
            <span className="text-gray-700 flex-1">{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const DoshaSection = ({ doshas }) => (
  <div className="mb-12">
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-2">
        KUNDALI MATCHING AND RELATED DOSHAS
      </h2>
      <div className="w-32 h-0.5 bg-red-500 mx-auto"></div>
    </div>

    <p className="text-gray-700 mb-8 leading-relaxed">{doshas.introduction}</p>

    <div className="space-y-6">
      {doshas.types.map((dosha, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <h3 className="font-bold text-lg text-gray-900">{dosha.name}:</h3>
          <p className="text-gray-700 pl-4">{dosha.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const MatchingTypesSection = ({ matchingTypes }) => (
  <div className="mb-12">
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-2">
        DIFFERENCE BETWEEN KUNDALI MATCHING BY DATE OF BIRTH AND KUNDLI MATCHING
        BY NAME
      </h2>
      <div className="w-32 h-0.5 bg-red-500 mx-auto"></div>
    </div>

    <p className="text-gray-700 mb-6">{matchingTypes.introduction}</p>

    <div className="space-y-6">
      {matchingTypes.types.map((type, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-bold text-xl text-gray-900">{type.title}</h3>
          <p className="text-gray-700 pl-4">{type.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const KundaliInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 lg:px-8">
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
  );
};

export default KundaliInfo;
