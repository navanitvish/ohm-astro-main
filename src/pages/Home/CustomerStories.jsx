// import React from 'react';
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useSelector } from "react-redux";
// import translations from "../../components/translations/translations";
// import { useQuery } from "@tanstack/react-query";
// import { fetchTopRatedAstrologers } from "../../api/apiCalls";

// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg items-center justify-center hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-10"
//   >
//     <ChevronLeft className="w-6 h-6 text-pink-500" />
//   </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg items-center justify-center hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-10"
//   >
//     <ChevronRight className="w-6 h-6 text-pink-500" />
//   </button>
// );

// const CustomerStories = () => {
//   const language = useSelector((state) => state.language.language);
//   const t = translations[language];

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["fetchTopRatedAstrologers"],
//     queryFn: fetchTopRatedAstrologers,
//   });

//   if (isLoading) {
//     return (
//       <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
//         <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
//         <p className="mt-4 text-gray-600">Loading top-rated astrologers...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-[400px] flex items-center justify-center p-4">
//         <p className="text-red-500">Error fetching astrologers: {error.message}</p>
//       </div>
//     );
//   }

//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     swipeToSlide: true,
//     touchThreshold: 10,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//           dots: true,
//           centerMode: true,
//           centerPadding: '16px',
//         }
//       }
//     ]
//   };

//   return (
//     <div className="bg-gradient-to-b from-red-50 to-pink-50">
//       <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
//             {t.Customer}
//           </h2>
//           <div className="flex justify-center items-center gap-2">
//             <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
//             <div className="h-1 w-20 bg-pink-500 rounded-full"></div>
//           </div>
//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto">{t.desc}</p>
//         </div>

//         <div className="relative px-0 md:px-16">
//           <Slider {...settings}>
//             {data?.map(({ astrologer, averageRating }) => (
//               <div key={astrologer._id} className="px-2 md:px-4 h-full">
//                 <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-[500px] md:h-[550px] flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100">
//                   <div className="flex-1 flex flex-col items-center">
//                     <div className="relative mb-6">
//                       <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-pink-100 ring-offset-2">
//                         <img
//                           src={astrologer.image || "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/628289f4-bd17-4d80-b2d6-b3586fcb824a.png"}
//                           alt={astrologer.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-pink-100">
//                         <div className="flex items-center gap-1">
//                           <span className="text-yellow-400 text-lg">★</span>
//                           <span className="text-gray-700 font-medium">{averageRating?.toFixed(1) || "5.0"}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
//                       {astrologer.name}
//                     </h3>

//                     {astrologer.role && (
//                       <p className="text-pink-500 font-medium mb-2 text-center">
//                         {astrologer.role}
//                       </p>
//                     )}

//                     {astrologer.location && (
//                       <p className="text-gray-500 text-sm mb-4 flex items-center gap-1 text-center">
//                         <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
//                         {astrologer.location}
//                       </p>
//                     )}

//                     <p className="text-gray-600 text-center line-clamp-4 flex-1">
//                       {astrologer.bio}
//                     </p>

//                     <button className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full font-medium hover:from-amber-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
//                       Book Consultation
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerStories;

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";

const CustomerStories = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Get number of visible slides based on screen width
  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 3;
    return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!sliderRef.current) return;
    
    const slideWidth = sliderRef.current.offsetWidth / getVisibleSlides();
    const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const visibleSlides = getVisibleSlides();
      const maxIndex = dummyCustomers.length - visibleSlides;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const visibleSlides = getVisibleSlides();
      const maxIndex = dummyCustomers.length - visibleSlides;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Update slider position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / getVisibleSlides();
      sliderRef.current.scrollLeft = currentIndex * slideWidth;
    }
  }, [currentIndex]);

  const dummyCustomers = [
    {
      customer: {
        _id: "1",
        name: t.AnitaSharma,
        story: t.Anitastory,
        location: t.Anitalocatio,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybEs7OAsuRVQqvOpSmt5aUQifpQI9rHznVw&s"
      },
      averageRating: 4.8
    },
    {
      customer: {
        _id: "2",
        name:t.RohitMehta ,
        story:t.Rohitstory ,
        location: t.Rohitlocation,
        image: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2021/09/rohit1.jpeg"
      },
      averageRating: 4.9
    },
    {
      customer: {
        _id: "3",
        name:t.PriyaKapoor,
        story: t.Priyastory,
        location:t.Priyalocation,
        image: "https://media.licdn.com/dms/image/v2/C5103AQHiFTSIKwWxsQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1549347001867?e=2147483647&v=beta&t=jKIHic6uQ6BWmgXJgxYmbmwBGLNV9W4L0TF_LxUTt1E"
      },
      averageRating: 4.7
    },
    {
      customer: {
        _id: "4",
        name: t.VikramSingh,
        story: t.Vikramstory,
        location: t.Vikramlocation,
        image: "https://pg.nsfoundation.co.in/wp-content/uploads/2022/01/Vishesh-Vikram-Singh-Photograph.jpg"
      },
      averageRating: 4.6
    }
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
            {t.Customer}
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-8 md:w-12 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-16 md:w-20 bg-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
            {t.desc}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative px-2 md:px-12 lg:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-8 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg items-center justify-center hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-8 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg items-center justify-center hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
          </button>

          {/* Cards Container */}
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                !isDragging ? 'scroll-smooth' : ''
              }`}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`
              }}
            >
              {dummyCustomers.map(({ customer, averageRating }) => (
                <div key={customer._id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4 py-4 md:py-6">
                  <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="relative mb-4 md:mb-6">
                        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-4 ring-pink-100 ring-offset-2">
                          <img
                            src={customer.image}
                            alt={customer.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 md:px-3 py-1 rounded-full shadow-md border border-pink-100">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-base md:text-lg">★</span>
                            <span className="text-gray-700 font-medium text-sm md:text-base">
                              {averageRating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 text-center">
                        {customer.name}
                      </h3>

                      <p className="text-sm md:text-base text-gray-600 text-center mb-3 md:mb-4 line-clamp-4">
                        {customer.story}
                      </p>

                      {customer.location && (
                        <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4 flex items-center gap-1 text-center">
                          <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
                          {customer.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots Navigation */}
          <div className="flex md:hidden justify-center mt-4 space-x-2">
            {dummyCustomers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-pink-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;