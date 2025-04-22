import { Phone, MessageSquare } from 'lucide-react';
import { useSelector } from 'react-redux';
import translations from '../components/translations/translations';
const VedicAstrologersSection = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const astrologers = [
    {
      name: 'Dr. Raghunandan',
      image: '/src/assets/WhatsApp Image 2024-12-15 at 20.53.32_3d687b1c.jpg',
    },
    {
      name: 'Dr. Aarti',
      image: '/src/assets/WhatsApp Image 2024-12-15 at 20.57.52_aa38d7b7.jpg',
    },
    {
      name: 'Dr. Hari Narayan',
     
      image: '/src/assets/WhatsApp Image 2024-12-15 at 20.59.04_069a45d0.jpg',
    }
  ];

  return (
    <div className="bg-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.consultAstrologer}
            </h2>
            <p className="text-gray-700 mb-6">
             {t.consltdesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
                <Phone size={20} />
                {t.talkToAstrologer}
              </button>
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
                <MessageSquare size={20} />
                {t.chatWithAstrologer}
              </button>
            </div>
          </div>

          {/* Right Content - Astrologer Profiles */}
          <div className="flex gap-6">
            {astrologers.map((astrologer, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2 border-4 border-white shadow-lg">
                  <img
                    src={astrologer.image}
                    alt={astrologer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-800">{astrologer.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedicAstrologersSection;