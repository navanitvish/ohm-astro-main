import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "How Accurate Is Online Kundli Matching?",
    answer: "The results of the Janam Kundli matching depend upon the quality of the software used, the expertise of the astrologers, and the information provided by the individuals. The online free kundali milan follows the same principles as traditional methods and provides accurate results."
  },
  {
    id: 2,
    question: "How Many Gunas Should Match For Marriage?",
    answer: "Traditional Vedic astrology recommends a minimum of 18-24 Gunas to match for a harmonious marriage. However, the exact number may vary based on different astrological schools of thought."
  },
  {
    id: 3,
    question: "Is Mangal Dosha Matching Also Important?",
    answer: "Yes, Mangal Dosha matching is considered crucial in Vedic astrology as it can significantly impact marital harmony. It requires careful analysis of Mars' position in both horoscopes."
  },
  {
    id: 4,
    question: "Can Nadi Dosha Be Ignored?",
    answer: "Nadi Dosha is one of the important factors in Kundali matching. While some aspects can be compensated by other positive matches, it's generally not recommended to ignore it completely."
  },
  {
    id: 5,
    question: "Which Test Is Most Important In Kundali Matching?",
    answer: "The Guna Milan test, which analyzes the compatibility of 36 Gunas between partners, is considered one of the most important aspects of Kundali matching."
  },
  {
    id: 6,
    question: "Is It OK To Marry Without Kundali Matching?",
    answer: "While personal choice is paramount, traditional astrology recommends Kundali matching for understanding potential compatibility. The final decision should be based on multiple factors."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text  mb-8">
        FREQUENTLY ASKED QUESTIONS
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