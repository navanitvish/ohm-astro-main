import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";


const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const faqData = [
    {
      id: 1,
      question: t.question1,
      answer: t.answer1,
    },
    {
      id: 2,
      question:t.question2,
      answer:t.answer2,
    },
    {
      id: 3,
      question: t.question3,
      answer: t.answer3,
    },
    {
      id: 4,
      question: t.question4,
      answer: t.answer4,
    },
    {
      id: 5,
      question: t.question5,
      answer: t.answer5,
    },
    {
      id: 6,
      question: t.question6,
      answer:t.answer6,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text  mb-8">
      {t.faqtitle}
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
      </h1>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-gray-200"
          >
            <button
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              onClick={() => toggleAccordion(faq.id)}
            >
              <span className="font-medium text-gray-900">
                {faq.question}
              </span>
              {openId === faq.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openId === faq.id ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="pb-4 text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;