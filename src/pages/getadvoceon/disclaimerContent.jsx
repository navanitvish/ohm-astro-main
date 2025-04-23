import React from 'react';
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";





const Disclaimer = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const disclaimerContent = {
  
    title: t.DISCLAIMERtitle,
    paragraphs: t.DISCLAIMERparagraphs,
    breadcrumb: t.breadcrumb,
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation breadcrumb */}
      <div className="bg-pink-500 text-white p-4">
        <div className="container mx-auto flex items-center space-x-2">
          <a href={disclaimerContent.breadcrumb.home} className="hover:text-gray-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
          <span className="text-gray-200">/</span>
          <span>{disclaimerContent.breadcrumb.current}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 relative">
          {disclaimerContent.title}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500"></div>
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          {disclaimerContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;