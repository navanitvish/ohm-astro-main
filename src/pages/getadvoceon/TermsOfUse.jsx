import React from "react";

import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";

const TermsOfUse = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const termsContent = {
    title: t.TERMStitle,
    intro:t.intro,
    sections: t.TERMSsections,
  };
  return (
    <div className="max-w-6xl mx-auto p-6  text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">{termsContent.title}</h1>
      <p className="mb-6 text-sm">{termsContent.intro}</p>
      {termsContent.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
          {section.content.map((item, idx) => {
            if (Array.isArray(item)) {
              return (
                <ul key={idx} className="list-disc list-inside ml-4 mb-4">
                  {item.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx} className="mb-4">{item}</p>;
          })}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
