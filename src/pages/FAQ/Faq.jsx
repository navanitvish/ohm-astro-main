import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('consulting');
  const [openItems, setOpenItems] = useState({
    'chat-start': true,
  });

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ Data for both tabs
  const faqData = {
   consulting: [
      {
        id: 'chat-start',
        question: t.faq_chat_start_question,
        answer: t.faq_chat_start_answer
      },
      {
        id: 'minimum-balance',
        question: t.faq_minimum_balance_question,
        answer: t.faq_minimum_balance_answer
      },
      {
        id: 'astrologers-verified',
        question: t.faq_astrologers_verified_question,
        answer: t.faq_astrologers_verified_answer
      },
      {
        id: 'phone-call',
        question: t.faq_phone_call_question,
        answer: t.faq_phone_call_answer
      },
      {
        id: 'astrologer-unavailable',
        question: t.faq_astrologer_unavailable_question,
        answer: t.faq_astrologer_unavailable_answer
      },
      {
        id: 'payment',
        question: t.faq_payment_question,
        answer: t.faq_payment_answer
      },
      {
        id: 'check-balance',
        question: t.faq_check_balance_question,
        answer: t.faq_check_balance_answer
      },
      {
        id: 'chat-history',
        question: t.faq_chat_history_question,
        answer: t.faq_chat_history_answer
      },
      {
        id: 'privacy',
        question: t.faq_privacy_question,
        answer: t.faq_privacy_answer
      },
      {
        id: 'issues',
        question: t.faq_issues_question,
        answer: t.faq_issues_answer
      }
    ],
    store: [
      {
        id: 'shipping',
        question: t.faq_shipping_question,
        answer: t.faq_shipping_answer
      },
      {
        id: 'returns',
        question: t.faq_returns_question,
        answer: t.faq_returns_answer
      },
      {
        id: 'payment-methods',
        question: t.faq_payment_methods_question,
        answer: t.faq_payment_methods_answer
      },
      {
        id: 'international-shipping',
        question: t.faq_international_shipping_question,
        answer: t.faq_international_shipping_answer
      },
      {
        id: 'product-authenticity',
        question: t.faq_product_authenticity_question,
        answer: t.faq_product_authenticity_answer
      },
      {
        id: 'custom-orders',
        question: t.faq_custom_orders_question,
        answer: t.faq_custom_orders_answer
      },
      {
        id: 'discount-codes',
        question: t.faq_discount_codes_question,
        answer: t.faq_discount_codes_answer
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold mb-12">
        FREQUENTLY ASKED QUESTIONS
        <div className="h-1 w-32 bg-red-500 mx-auto mt-2"></div>
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b">
        <div className="flex w-full max-w-xl">
          <button
            onClick={() => setActiveTab('consulting')}
            className={`flex-1 py-3 text-center ${
              activeTab === 'consulting'
                ? 'text-red-500 border-b-2 border-red-500 font-medium'
                : 'text-gray-600 hover:text-red-400'
            }`}
          >
            {t.faqConsulting}
          </button>
          <button
            onClick={() => setActiveTab('store')}
            className={`flex-1 py-3 text-center ${
              activeTab === 'store'
                ? 'text-red-500 border-b-2 border-red-500 font-medium'
                : 'text-gray-600 hover:text-red-400'
            }`}
          >
          {t.faqStore}
          </button>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        {faqData[activeTab].map((item) => (
          <div 
            key={item.id} 
            className="border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full py-5 px-2 text-left font-medium text-gray-800 hover:text-red-500"
            >
              <span>{item.question}</span>
              {openItems[item.id] ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            
            {openItems[item.id] && (
              <div className="pb-5 px-2 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;