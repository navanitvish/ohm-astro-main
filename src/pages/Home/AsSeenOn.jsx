import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';



const AsSeenOn = () => {

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const mediaOutlets = [
    {
      name: "ABP Live",
      logo: "https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/publishers/abp_live.png",
      originalBg: "rgb(255, 255, 255)",
    },
    {
      name: "The Economic Times",
      logo: "https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/publishers/et-logo.png",
      originalBg: "rgb(255, 255, 255)",
    },
    {
      name: "The Week",
      logo: "https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/publishers/theweek.png",
      originalBg: "rgb(255, 255, 255)",
    },
    {
      name: "Mid Day",
      logo: "https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/publishers/mid_day.png",
      originalBg: "rgb(255, 255, 255)",
    },
    {
      name: "Business Standard",
      logo: "https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/publishers/Businessstandard.png",
      originalBg: "rgb(255, 255, 255)",
    }
  ];
  return (
    <section className="bg-[#2D1F2B] py-16 px-4 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
         {t.ASSEEN}
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {mediaOutlets.map((outlet, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-24 flex items-center justify-center">
                <img
                  src={outlet.logo}
                  alt={`${outlet.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;