
import  { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
const WhyAnyTimeAstro = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [openSection, setOpenSection] = useState("verified");

  const sections = [
    {
      id: "verified",
      title: t.faqtitile1,
      content: t.faqcontent1,
    },
    {
      id: "multiple-ways",
      title: t.faqtitile2,
      content: t.faqcontent2,
    },
    {
      id: "privacy",
      title: t.faqtitile3,
      content: t.faqcontent3,
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? "" : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
          {t.whyAnytimeAstro}
        </h1>
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {t.whyAnytimeAstroDesc1}
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4 max-w-8xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h2>
              {openSection === section.id ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openSection === section.id
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAnyTimeAstro;

