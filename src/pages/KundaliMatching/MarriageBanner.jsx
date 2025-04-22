import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";

const MarriageBanner = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  return (
    <div className="relative w-full h-[350px] bg-pink-50 overflow-hidden">
      {/* Decorative circles */}
      {/* <div className="absolute   w-12 h-12  bg-yellow-300 rounded-full opacity-80"></div> */}
      <div className="absolute top-4 right-8  w-16 h-16 bg-yellow-300 rounded-full opacity-80"></div>
      <div className="absolute bottom-4 left-8 w-12 h-12 bg-yellow-300 rounded-full opacity-80"></div>

      {/* Main content container */}
      <div className="relative max-w-6xl mx-auto h-full flex items-center">
        {/* Text content */}
        <div className="w-1/2 text-center ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-6">
            {t.Marriagetitle1}<span className="text-red-500"> {" "}{t.Marriagetitle2}</span> 
            <br />
         {t.Marriagetitle3}
          </h1>

          {/* Red underline decoration */}
          <div className="w-32 h-1 bg-red-500 mx-auto mb-6"></div>

          <p className="text-xl text-gray-700 mb-8">
           {t.Marriagesubtitle}
          </p>

          <button
            className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full font-semibold 
                           hover:bg-yellow-500 transition-colors duration-300"
          >
           {t.MarriagebuttonText}
          </button>
        </div>

        {/* Diagonal background and image */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          {/* Red diagonal background */}
          <div
            className="absolute top-0 -right-6 w-[400px] h-[400px] bg-red-500 
                        transform -skew-x-12 skew-y-12 origin-top-right"
          ></div>

          {/* Image container */}
          <div
            className="absolute top-1/2 right-8 transform -translate-y-1/2 w-80 p-4 bg-white h-96 
                        border-8 border-white shadow-lg"
          >
            <div
              className="absolute top-48 right-2   transform -translate-y-1/2 w-80 h-96  
                        border-8 border-gray-100 shadow-xl"
            >
              <img
                src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/ads/indian-bride-ads.png"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriageBanner;
