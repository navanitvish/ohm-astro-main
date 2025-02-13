// import { Award, DollarSign, Globe, Gem } from "lucide-react";
// import { useSelector } from "react-redux";
// import translations from "../../components/translations/translations";

// import { useQuery } from "@tanstack/react-query";
// import { fetchGemstones } from "../../api/apiCalls";

// const GemstoneShowcas = () => {
//   const language = useSelector((state) => state.language.language);
//   const t = translations[language];

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["fetchGemstones"], // Query key
//     queryFn: fetchGemstones, // Fetch function
//   });

//   console.log("Fetched gemstones data:", data);

//   if (isLoading) return <p>Loading gemstones...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const features = [
//     {
//       id: 1,
//       icon: <Award className="w-12 h-12 text-rose-500" />,
//       title: t.CertifiedGemstones,
//       description: t.EthicallySourced,
//     },
//     {
//       id: 2,
//       icon: <DollarSign className="w-12 h-12 text-rose-500" />,
//       title: t.BestMarketPrices,
//       description: t.PremiumGemstones,
//     },
//     {
//       id: 3,
//       icon: <Globe className="w-12 h-12 text-rose-500" />,
//       title: t.WorldwideShipping,
//       description: t.FastAndSecureDelivery,
//     },
//     {
//       id: 4,
//       icon: <Gem className="w-12 h-12 text-rose-500" />,
//       title: t.title,
//       description: t.description,
//     },
//   ];

//   return (
//     <div>
//       {/* Features Section */}
//       <div className="mx-auto py-16 bg-orange-950 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-white text-lg font-semibold mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-300 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-purple-950 to-pink-50">
//         {/* Gemstones Section */}
//         <div className="max-w-6xl mx-auto py-16 px-4">
//           <h2 className="text-center  text-xl md:text-2xl lg:text-3xl  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-2 font-bold mb-12">
//             {t.SELECTFROM}
//             <div className="w-64 h-1 bg-rose-500 mx-auto mt-2"></div>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-8">
//             {data?.gemstones.map((stone) => (
//               <div
//                 key={stone._id}
//                 className="relative group cursor-pointer transition-transform hover:scale-105"
//               >
//                 <div
//                   className={`rounded-3xl p-4 bg-blue-50 shadow-lg`} // Add appropriate styles based on data
//                 >
//                   <div className="relative">
//                     <div
//                       className={`absolute top-4 w-full h-32 bg-blue-200 rounded-t-full transform -translate-y-1/2`}
//                     ></div>
//                     <img
//                       src={stone.images[0]}
//                       alt={stone.name}
//                       className="relative z-10 w-full h-48 object-contain bg-transparent"
//                     />
//                   </div>
//                   <h3 className="text-center font-medium mt-4 mb-2">
//                     {stone.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GemstoneShowcas;



import { Award, DollarSign, Globe, Gem } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchGemstones } from "../../api/apiCalls";

const GemstoneShowcase = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchGemstones"],
    queryFn: fetchGemstones,
  });

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg">Loading gemstones...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg text-red-500">Error: {error.message}</p>
    </div>
  );

  const features = [
    {
      id: 1,
      icon: <Award className="w-8 h-8 md:w-12 md:h-12 text-rose-500" />,
      title: t.CertifiedGemstones,
      description: t.EthicallySourced,
    },
    {
      id: 2,
      icon: <DollarSign className="w-8 h-8 md:w-12 md:h-12 text-rose-500" />,
      title: t.BestMarketPrices,
      description: t.PremiumGemstones,
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8 md:w-12 md:h-12 text-rose-500" />,
      title: t.WorldwideShipping,
      description: t.FastAndSecureDelivery,
    },
    {
      id: 4,
      icon: <Gem className="w-8 h-8 md:w-12 md:h-12 text-rose-500" />,
      title: t.title,
      description: t.description,
    },
  ];

  return (
    <div className="w-full">
      {/* Features Section */}
      <div className="w-full py-8 md:py-16 bg-orange-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition-transform"
              >
                <div className="mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-white text-base md:text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gemstones Section */}
      <div className="bg-gradient-to-b from-purple-950 to-pink-50">
        <div className="container mx-auto py-8 md:py-16 px-4">
          <h2 className="text-center text-xl md:text-3xl bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text font-bold mb-6 md:mb-12">
            {t.SELECTFROM}
            <div className="w-32 md:w-64 h-1 bg-rose-500 mx-auto mt-2"></div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-6">
            {data?.gemstones.map((stone) => (
              <div
                key={stone._id}
                className="relative group cursor-pointer transition-transform hover:scale-105"
              >
                <div className="rounded-3xl p-4 mt-10 space-y-4 bg-blue-50 shadow-lg h-full">
                  <div className="relative pb-4 ">
                    <div className="absolute top-10 w-full h-44 md:h-38  bg-blue-200 rounded-t-full transform -translate-y-1/2 " />
                    <img
                      src={stone.images[0]}
                      alt={stone.name}
                      className="relative z-10 w-full h-32 md:h-48 object-contain bg-transparent"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-center text-sm md:text-base font-medium mt-2 md:mt-4">
                    {stone.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemstoneShowcase;




