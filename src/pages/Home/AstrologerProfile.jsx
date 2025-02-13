// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FiShare2, FiHeart, FiArrowLeft, FiChevronDown } from "react-icons/fi";
// import { Toaster, toast } from "react-hot-toast";

// import { useQuery } from "@tanstack/react-query";
// import { fetchastrologers } from "../../api/apiCalls";

// const AstrologerProfile = () => {
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   // const { name } = useParams();
//   const navigate = useNavigate();

//   const { id } = useParams();
//   console.log("id", id);


//   const [showShareModal, setShowShareModal] = useState(false);

//   const handleFavoriteClick = () => {
//     toast.success("Astrologer added to 'My Favorites'.", { duration: 2000 });
//   };

//   const {
//     data: astrologersData,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["astrologers"],
//     queryFn: fetchastrologers,
//   });

//   const [astrologer, setAstrologer] = useState([]);

//   console.log("astrologer profile", astrologer);

//   useEffect(() => {
//     if (astrologersData?.data) {
//       const astrologerArray = Array.isArray(astrologersData.data)
//         ? astrologersData.data 
//         : [astrologersData.data];
  
//       const foundAstrologer = astrologerArray.find(
//         (a) => a._id === id || a.id === id
//       );
  
//       if (foundAstrologer) {
//         console.log(`Found Astrologer: ${foundAstrologer.name} (ID: ${foundAstrologer._id || foundAstrologer.id})`);
//         setAstrologer(foundAstrologer);
//       }
//     }
//   }, [astrologersData, id]);
  
//   // In the rendering section, you can add:
//   {astrologer && (
//     <div className="text-gray-600">
//       {astrologer.name} (ID: {astrologer._id || astrologer.id})
//     </div>
//   )}

//   if (isLoading) {
//     return (
//       <div className="text-center p-8">
//         <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
//         <p className="mt-4">Loading astrologer details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error fetching astrologer details: {error.message}</p>;
//   }

//   if (!astrologer) {
//     return <p>Astrologer not found</p>;
//   }

//   const availability = [
//     { day: "Saturday", date: "November 23", status: "Available" },
//     { day: "Sunday", date: "November 24", status: "Not Available" },
//     { day: "Monday", date: "November 25", status: "07:00 AM 08:00 AM" },
//     { day: "Tuesday", date: "November 26", status: "Not Available" },
//     { day: "Wednesday", date: "November 27", status: "Not Available" },
//     { day: "Thursday", date: "November 28", status: "Not Available" },
//     { day: "Friday", date: "November 29", status: "Not Available" },
//   ];

//   const reviews = [
//     {
//       id: 1,
//       initial: "L",
//       name: "Lakshmi Kumari",
//       rating: 5,
//       comment:
//         "bhot bhot bhot badhiya bhot he badhiya experience raha shabdon se byan kitna b kare lakin kam hai Ane bale break se bacha liye thank you so much mam",
//     },
//     {
//       id: 2,
//       initial: "N",
//       name: "neha",
//       rating: 5,
//       comment: "She is very polite n helpful",
//     },
//     {
//       id: 3,
//       initial: "G",
//       name: "Gloria SugandhitTopno",
//       rating: 5,
//       comment:
//         "Priyanka p , maam is very excellent.it is really good chat with her .no need to think twice,what ever she said all truth",
//     },
//     {
//       id: 4,
//       initial: "R",
//       name: "Rati Sharma Sharma",
//       rating: 5,
//       comment: "Mam is very supportive",
//     },
//     {
//       id: 5,
//       initial: "S",
//       name: "Saloni",
//       rating: 5,
//       comment: "Very good experience",
//     },
//   ];

//   const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

//   const shareOptions = [
//     { name: "Telegram", icon: "📨" },
//     { name: "Pinterest", icon: "📌" },
//     { name: "Facebook", icon: "📖" },
//     { name: "X", icon: "🐦" },
//     { name: "LinkedIn", icon: "🔗" },
//     { name: "WhatsApp", icon: "📱" },
//     { name: "Email", icon: "📧" },
//     { name: "Copy Link", icon: "🔗" },
//   ];

//   const gifts = [
//     { id: 1, name: "Heart", price: 21, icon: "❤️" },
//     { id: 2, name: "Flowers", price: 31, icon: "💐" },
//     { id: 3, name: "Pooja Thali", price: 31, icon: "🙏" },
//     { id: 4, name: "Clove", price: 51, icon: "🌺" },
//     { id: 5, name: "Chocolate", price: 51, icon: "🍫" },
//     { id: 6, name: "Crown", price: 101, icon: "👑" },
//     { id: 7, name: "Magician", price: 101, icon: "🎭" },
//     { id: 8, name: "Laddus", price: 501, icon: "🍯" },
//     { id: 9, name: "Dakshina", price: 1100, icon: "🪙" },
//     { id: 10, name: "Ganesha", price: 2100, icon: "🕉️" },
//     { id: 11, name: "Shivling", price: 5100, icon: "🛕" },
//   ];

//   const photoGallery = [
//     {
//       id: 1,
//       type: "video",
//       thumbnail:
//         "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/628289f4-bd17-4d80-b2d6-b3586fcb824a.png",
//     },
//     {
//       id: 2,
//       type: "image",
//       src: "https://cdn.anytimeastro.com/dashaspeaks/experts/gallary/live/1754691/thumb_43d23aa4-90d7-4279-92e0-ffe26db1ec11.png",
//     },
//     {
//       id: 3,
//       type: "image",
//       src: "https://cdn.anytimeastro.com/dashaspeaks/experts/gallary/live/1754691/thumb_17303d50-4aa4-4e4c-88ac-75aadb51841b.png",
//     },
//     {
//       id: 4,
//       type: "image",
//       src: "https://cdn.anytimeastro.com/dashaspeaks/experts/gallary/live/1754691/thumb_c4f67a1a-c6d0-4ca3-b30c-c2e0d13964ff.png",
//     },
//     {
//       id: 5,
//       type: "image",
//       src: "https://cdn.anytimeastro.com/dashaspeaks/experts/gallary/live/1754691/thumb_c7b34d49-6a18-4110-9317-e78b5f8b0042.png",
//     },
//   ];

//   // const astrologer = {
//   //   name,
//   //   reviews: 3611,
//   //   rating: 5,
//   //   image:
//   //     "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/628289f4-bd17-4d80-b2d6-b3586fcb824a.png",
//   //   about:
//   //     "Hey! I have been serving as a Tarot Reader and Intuitive Astrologer for more than a decade, counselling and resolving various life aspects, such as love, relationship and career issues using simple but highly efficient remedies. From a young age, I developed interest in Tarot reading, a journey that began through a meditation practice. Throughout these years I've offered healing and remedies on various life aspects such as love, relationships, career, finance, health, and much more. I have a keen expertise in resolving marital affairs, delayed marriages, relationship problems, and other family matters. When providing remedies, I make sure they are simple to implement yet highly effective in ensuring your success and personal growth. As a testament to my work, I have an excellent customer retention rate as the majority of my clients leave happy and fulfilled. For me, tarot cards and astrology are powerful tools that allow self-reflection and insight into one's life and environment. With my natural ability to connect with the energy and symbolism of the cards, I am able to guide my clients towards insight, clarity, and empowerment. Feel free to consult me if you have any issues in life.",
//   //   experience:
//   //     "With over 10 years of experience as an accredited Astrologer and Tarot Card Reader and through dedicated practice, I've mastered my skills and deepened my understanding of the art of intuitive Tarot Readings. Whether it's clarity in love, career choices, or personal growth you seek, my expertise has been helping thousands of individuals to resolve their life issues. Don't hesitate to reach out to me if you're confronted with any challenges in your life.",
//   //   specializations: [
//   //     "Horary Astrology",
//   //     "Break-Up & Divorce",
//   //     "Career & Job",
//   //     "Cheating & Affairs",
//   //     "Marital Life",
//   //     "Love & Relationship",
//   //     "Kids & Education",
//   //     "Vedic Astrology",
//   //     "Finance & Business",
//   //     "Tarot Reading",
//   //   ],
//   // };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Toaster />

//       {/* Header */}
//       <div className="bg-rose-500 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <button
//             onClick={() => navigate("/")}
//             className="flex items-center text-white gap-2 hover:bg-rose-600 px-3 py-1 rounded-lg transition"
//           >
//             <FiArrowLeft /> Back
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
//         {/* Profile Header */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Left Column - Profile Image & Actions */}
//             <div className="md:w-1/4">
//               <img
//                 src={astrologer.profileImage}
//                 alt={astrologer.name}
//                 className="w-40 h-40 rounded-full shadow-lg mx-auto"
//               />
//               <div className="mt-4 flex justify-center gap-4">
//                 <button
//                   className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition"
//                   onClick={() => setShowShareModal(true)}
//                 >
//                   <FiShare2 /> Share
//                 </button>
//                 <button
//                   className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition"
//                   onClick={handleFavoriteClick}
//                 >
//                   <FiHeart /> Favorite
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Profile Info */}
//             <div className="md:w-3/4">
//               <div className="flex flex-col md:flex-row justify-between gap-4">
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-800">
//                     {astrologer.name}
//                   </h1>
//                   <p className="text-gray-600 mt-2">Vedic Astrology</p>
//                   <p className="text-gray-600">English, Hindi, Sindhi</p>

//                   <div className="flex items-center gap-6 mt-4">
//                     <div className="flex items-center gap-1">
//                       <span className="text-yellow-400 text-xl">★</span>
//                       <span className="font-semibold">{astrologer.rating}</span>
//                     </div>

//                     <div className="text-gray-600">
//                       {astrologer?.reviews?.toLocaleString() || "0"} reviews
//                     </div>
//                     <div className="text-gray-600">{astrologer.experience}</div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition shadow-sm">
//                     Chat ₹299/Min
//                   </button>
//                   <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition shadow-sm">
//                     Call {astrologer.callChargePerMinute}/Min
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

        
//       {/* Specializations */}
// <div className="bg-white rounded-xl p-6 shadow-sm">
//   <h2 className="text-2xl font-bold text-gray-800 mb-4">
//     Specialization
//   </h2>
//   <div className="flex flex-wrap gap-3">
//     {astrologer?.specializations?.map((spec, index) => (
//       <span
//         key={index}
//         className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700 transition cursor-default"
//       >
//         {spec}
//       </span>
//     )) || <p>No specializations found</p>}
//   </div>
// </div>

//         {/* Photo Gallery */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {photoGallery.map((item) => (
//               <div
//                 key={item.id}
//                 className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
//               >
//                 {item.type === "video" && (
//                   <div className="absolute inset-0 flex items-center justify-center z-10">
//                     <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center group-hover:bg-opacity-90 transition">
//                       <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-rose-500 border-b-8 border-b-transparent ml-1" />
//                     </div>
//                   </div>
//                 )}
//                 <img
//                   src={item.type === "video" ? item.thumbnail : item.src}
//                   alt={`Gallery item ${item.id}`}
//                   className="w-full h-full object-cover transition group-hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* About & Experience */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             About My Services
//           </h2>
//           <p className="text-gray-700 leading-relaxed">{astrologer.about}</p>

//           <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
//             Experience & Qualification
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             {astrologer.experience}
//           </p>
//         </div>

//         {/* Plans */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Exclusive Plans & Discounts
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {[1, 2].map((plan) => (
//               <div
//                 key={plan}
//                 className="border border-gray-200 rounded-xl p-6 hover:border-rose-200 transition cursor-pointer"
//               >
//                 <div className="bg-rose-500 text-white px-4 py-1 rounded-full inline-block mb-3">
//                   Super Saver Pack
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">15 Minutes</h3>
//                 <p className="text-gray-600 mt-1 mb-4">Session</p>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <span className="text-2xl font-bold text-gray-800">
//                       ₹4,261
//                     </span>
//                     <span className="text-gray-400 line-through ml-2">
//                       ₹4,485
//                     </span>
//                   </div>
//                   <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
//                     5% Off
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gifts */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">
//               Send Gift to Expert
//             </h2>
//             <div className="text-gray-600">
//               Wallet Balance: <span className="font-semibold">₹0</span>
//             </div>
//           </div>
//           <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
//             {gifts.map((gift) => (
//               <div
//                 key={gift.id}
//                 className="flex flex-col items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-rose-300 hover:bg-rose-50 transition group"
//               >
//                 <span className="text-3xl mb-2 group-hover:scale-110 transition">
//                   {gift.icon}
//                 </span>
//                 <span className="text-sm text-gray-600">{gift.name}</span>
//                 <span className="text-sm font-semibold mt-1">
//                   ₹{gift.price}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Availability Calendar */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Check Online Availability
//           </h2>
//           <div className="bg-rose-50 rounded-xl p-6">
//             <div className="flex justify-between items-center">
//               {availability.map((slot, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <div className="text-gray-800 font-medium">{slot.day}</div>
//                   <div className="text-rose-500 text-sm">({slot.date})</div>
//                   <div className="my-4">
//                     <div
//                       className={`w-3 h-3 rounded-full ${
//                         slot.status === "Available"
//                           ? "bg-green-600"
//                           : "bg-rose-500"
//                       }`}
//                     />
//                   </div>
//                   <div
//                     className={`text-sm px-4 py-2 rounded-full ${
//                       slot.status === "Available"
//                         ? "bg-white text-rose-500 border border-rose-200"
//                         : "bg-white text-gray-500 border border-gray-200"
//                     }`}
//                   >
//                     {slot.status}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <div className="flex items-center gap-3 mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
//             <span className="text-rose-500 font-semibold">9429</span>
//             <div className="flex items-center gap-1">
//               <div className="flex">
//                 {"★★★★★".split("").map((star, i) => (
//                   <span key={i} className="text-yellow-400">
//                     {star}
//                   </span>
//                 ))}
//               </div>
//               <span className="font-semibold">5</span>
//             </div>
//           </div>

//           <div className="space-y-6">
//             {displayedReviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="border-b border-gray-100 pb-6 last:border-0"
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-medium">
//                     {review.initial}
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-800">
//                       {review.name}
//                     </div>
//                     <div className="flex text-yellow-400">
//                       {"★".repeat(review.rating)}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 ml-11">{review.comment}</p>
//               </div>
//             ))}
//           </div>

//           {reviews.length > 3 && (
//             <button
//               onClick={() => setShowAllReviews(!showAllReviews)}
//               className="mt-6 flex items-center gap-2 text-rose-500 hover:text-rose-600 transition mx-auto"
//             >
//               {showAllReviews ? "Show Less" : "Show More"}
//               <FiChevronDown
//                 className={`transform transition-transform ${
//                   showAllReviews ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Share Modal */}
//       {showShareModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold text-gray-800">Share Profile</h2>
//               <button
//                 className="text-gray-400 hover:text-gray-600 transition"
//                 onClick={() => setShowShareModal(false)}
//               >
//                 ✖️
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {shareOptions.map((option, index) => (
//                 <button
//                   key={index}
//                   className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-rose-300 hover:bg-rose-50 transition"
//                 >
//                   <span className="text-xl">{option.icon}</span>
//                   <span className="text-gray-700">{option.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AstrologerProfile;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiShare2, FiHeart, FiArrowLeft, FiChevronDown } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

import { astrologers } from "../../components/content/astrologersDetails";

const AstrologerProfile = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [astrologerData, setAstrologerData] = useState(null);
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log("Astrologer ID from params:", _id); 
  useEffect(() => {
    setLoading(true);
    
    console.log("Astrologer ID from params:", _id); // Log the ID from params

    const fetchedAstrologer = astrologers.find(a => a.id === _id);
    console.log("Fetched Astrologer:", fetchedAstrologer); // Log the fetched astrologer
    
    if (fetchedAstrologer) {
      setAstrologerData(fetchedAstrologer);
    } else {
      setAstrologerData(null);
    }
    
    setLoading(false);
}, [_id]);

  const handleFavoriteClick = () => {
    toast.success("Astrologer added to 'My Favorites'.", { duration: 2000 });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading...</h2>
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!astrologerData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Astrologer Not Found</h2>
          <p className="text-gray-600 mb-6">The astrologer you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition shadow-sm"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const displayedReviews = showAllReviews 
    ? astrologerData.reviewData.items 
    : astrologerData.reviewData.items.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      {/* Header */}
      <div className="bg-rose-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-white gap-2 hover:bg-rose-600 px-3 py-1 rounded-lg transition"
          >
            <FiArrowLeft /> Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Profile Image & Actions */}
            <div className="md:w-1/4">
              <img
                src={astrologerData.profileImage}
                alt={astrologerData.name}
                className="w-40 h-40 rounded-full shadow-lg mx-auto"
              />
              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition"
                  onClick={() => setShowShareModal(true)}
                >
                  <FiShare2 /> Share
                </button>
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition"
                  onClick={handleFavoriteClick}
                >
                  <FiHeart /> Favorite
                </button>
              </div>
            </div>

            {/* Right Column - Profile Info */}
            <div className="md:w-3/4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    {astrologerData.name}
                  </h1>
                  <p className="text-gray-600 mt-2">Vedic Astrology</p>
                  <p className="text-gray-600">{astrologerData.languages.join(", ")}</p>

                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="font-semibold">{astrologerData.rating}</span>
                    </div>
                    <div className="text-gray-600">
                      {astrologerData.reviewData.total.toLocaleString()} reviews
                    </div>
                    <div className="text-gray-600">{astrologerData.experience}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition shadow-sm">
                    Chat {astrologerData.chatChargePerMinute}/Min
                  </button>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition shadow-sm">
                    Call {astrologerData.callChargePerMinute}/Min
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Specialization</h2>
          <div className="flex flex-wrap gap-3">
            {astrologerData.specializations.map((spec, index) => (
              <span
                key={index}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700 transition cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {astrologerData.photoGallery.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center group-hover:bg-opacity-90 transition">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-rose-500 border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                )}
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* About & Experience */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About My Services</h2>
          <p className="text-gray-700 leading-relaxed">{astrologerData.about}</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Experience & Qualification</h2>
          <p className="text-gray-700 leading-relaxed">{astrologerData.experience}</p>
        </div>

        {/* Plans */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Exclusive Plans & Discounts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((plan) => (
              <div
                key={plan}
                className="border border-gray-200 rounded-xl p-6 hover:border-rose-200 transition cursor-pointer"
              >
                <div className="bg-rose-500 text-white px-4 py-1 rounded-full inline-block mb-3">
                  Super Saver Pack
                </div>
                <h3 className="text-2xl font-bold text-gray-800">15 Minutes</h3>
                <p className="text-gray-600 mt-1 mb-4">Session</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">₹4,261</span>
                    <span className="text-gray-400 line-through ml-2">₹4,485</span>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">5% Off</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gifts */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Send Gift to Expert</h2>
            <div className="text-gray-600">Wallet Balance: <span className="font-semibold">₹0</span></div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {astrologerData.gifts.map((gift) => (
              <div
                key={gift.id}
                className="flex flex-col items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-rose-300 hover:bg-rose-50 transition group"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition">{gift.icon}</span>
                <span className="text-sm text-gray-600">{gift.name}</span>
                <span className="text-sm font-semibold mt-1">₹{gift.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Check Online Availability</h2>
          <div className="bg-rose-50 rounded-xl p-6">
            <div className="flex justify-between items-center">
              {astrologerData.availability.map((slot, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-gray-800 font-medium">{slot.day}</div>
                  <div className="text-rose-500 text-sm">({slot.date})</div>
                  <div className="my-4">
                    <div className={`w-3 h-3 rounded-full ${slot.status === "Available" ? "bg-green-600" : "bg-rose-500"}`} />
                  </div>
                  <div className={`text-sm px-4 py-2 rounded-full ${slot.status === "Available" ? "bg-white text-rose-500 border border-rose-200" : "bg-white text-gray-500 border border-gray-200"}`}>
                    {slot.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
            <span className="text-rose-500 font-semibold">{astrologerData.reviewData.total}</span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400">{star}</span>
                ))}
              </div>
              <span className="font-semibold">{astrologerData.rating}</span>
            </div>
          </div>

          <div className="space-y-6">
            {displayedReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-medium">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{review.name}</div>
                    <div className="flex text-yellow-400">{"★".repeat(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 ml-11">{review.comment}</p>
              </div>
            ))}
          </div>

          {astrologerData.reviewData.items.length > 3 && (
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="mt-6 flex items-center gap-2 text-rose-500 hover:text-rose-600 transition mx-auto"
            >
              {showAllReviews ? "Show Less" : "Show More"}
              <FiChevronDown className={`transform transition-transform ${showAllReviews ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Share Profile</h2>
              <button className="text-gray-400 hover:text-gray-600 transition" onClick={() => setShowShareModal(false)}>
                ✖️
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {astrologerData.shareOptions.map((option, index) => (
                <button key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-rose-300 hover:bg-rose-50 transition">
                  <span className="text-xl">{option.icon}</span>
                  <span className="text-gray-700">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AstrologerProfile;
