import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What Is A Live Astrology Session?",
      answer: "A live Astrology session is an interactive session with an experienced Astrologer in real time where you can ask questions and receive guidance based on the information provided by you."
    },
    {
      question: "How Long Is The Duration Of A Live Session?",
      answer: "Each live session typically lasts for 30-45 minutes, during which the astrologer will address questions from multiple participants. The duration may vary based on the complexity of questions and number of participants."
    },
    {
      question: "How Can I Join The Free Live Astrology Session?",
      answer: "You can join a free live astrology session by clicking the 'Join Now' button on any live session, or by clicking 'Notify Me' for scheduled sessions to receive a reminder when they begin."
    },
    {
      question: "What Can I Expect From A Live Session?",
      answer: "During a live session, you can expect personalized astrological guidance, answers to your specific questions, and insights about various aspects of life including career, relationships, and personal growth."
    },
    {
      question: "Are These Live Sessions Free?",
      answer: "Yes, these live sessions are completely free for all users. You can join and participate without any charges or hidden fees."
    },
    {
      question: "Do I Need To Prepare Anything Before The Live Session?",
      answer: "It's helpful to have your basic birth details ready (date, time, and place of birth) and prepare specific questions you'd like to ask. This helps the astrologer provide more accurate and relevant guidance."
    },
    {
      question: "What Type Of Questions Can Be Asked In A Live Session?",
      answer: "You can ask questions about various aspects of life including career, relationships, marriage, education, health, and general life guidance. However, please keep questions appropriate and respectful."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        LIVE SESSIONS - FAQS
        <div className="w-48 h-1 bg-rose-500 mx-auto mt-2"></div>
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-96 mb-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 pb-4">
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