import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
const GemstonesFAQ = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [openSection, setOpenSection] = useState('');

  const faqData = [
    {
      id: 'authenticity',
      title: t.Authenticity,
      content: t.content5,
    },
    {
      id: 'selection',
      title: t.VastSelection,
      content: t.content6,
    },
    {
      id: 'guidance',
      title: t.ExpertGuidance,
      content: t.content7,
    },
    {
      id: 'convenience',
      title: t.Convenience,
      content: t.content1,
    },
    {
      id: 'pricing',
      title: t.TransparentPricing,
      content: t.content2,
    },
    {
      id: 'support',
      title: t.RoundTheClockSupport,
      content: t.content3,
    },
    {
      id: 'security',
      title: t.SecureTransactions,
      content: t.content4,
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? '' : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-8 text-center">
        {t.whyrespect}
      </h1>
      
      <p className="text-center mb-12 text-gray-700">
       {t.werespect}
      </p>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
            >
              <span className="font-medium">{section.title}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  openSection === section.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openSection === section.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-4 bg-gray-50 text-gray-700">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GemstonesFAQ;