import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Info,
  ChevronDown,
} from "lucide-react";
import contentData from "../../components/content/pageContent";
import AstroServices from "./../Home/AstroServices";
import AstrologerCarousel from "../Home/AstrologerCarousel";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="p-4 text-gray-600 bg-gray-50">{answer}</p>
      </div>
    </div>
  );
};

const getIcon = (iconName) => {
  const icons = {
    Phone: Phone,
    MessageCircle: MessageCircle,
  };
  return icons[iconName] || Phone;
};

const GetAdviceOn = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentContent, setCurrentContent] = useState(null);

  useEffect(() => {
    const content = category
      ? contentData[category] || contentData.psychicReading
      : contentData.psychicReading;

    if (!contentData[category] && category) {
      navigate("/get-advice/psychicReading");
    }

    setCurrentContent(content);
  }, [category, navigate]);

  if (!currentContent)
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="">
        <AstroServices />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Main Content Card */}
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {currentContent.title.main}
          </h1>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[700px] flex flex-col justify-between mx-auto space-y-6">
              <p className="text-gray-600">{currentContent.description}</p>

              <div className="flex space-x-4">
                {currentContent.buttons.map((button, index) => {
                  const Icon = getIcon(button.icon);
                  return (
                    <button
                      key={index}
                      className="flex items-center gap-2 bg-red-500 text-white 
                        px-6 py-3 rounded-full hover:bg-red-600 transition-colors
                        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                    >
                      <Icon className="w-5 h-5" />
                      {button.text}
                    </button>
                  );
                })}
              </div>

              <p className="text-gray-700">{currentContent.mainContent}</p>
            </div>

            <div className="flex justify-center">
              <img
                src={currentContent.image}
                alt={`${currentContent.title.main} ${currentContent.title.highlight}`}
                className="rounded-2xl max-h-[400px] w-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-200"
              />
            </div>
          </div>
        </div>

        {/* Astrologer Carousel */}
      </div>

      <div className="">
        <div className=" ">
          <AstrologerCarousel />
        </div>
      </div>

      {/* Enhanced FAQ Section */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-full">
              <Info className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {currentContent.faq.title}
              </h2>
              <p className="text-gray-600 mt-1">
                {currentContent.faq.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {currentContent.faq.questions.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAdviceOn;
