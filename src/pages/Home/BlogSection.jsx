// import React from 'react';
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchBlogs } from "../../api/apiCalls";
// import { BlogCard } from '../Blog/BlogCard';

// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 
//     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
//     flex items-center justify-center transition-all duration-200
//     hover:bg-gray-50 hover:shadow-xl focus:outline-none 
//     focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 
//     border border-red-100 group"
//     aria-label="Previous slide"
//   >
//     <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-600" />
//   </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 
//     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
//     flex items-center justify-center transition-all duration-200
//     hover:bg-gray-50 hover:shadow-xl focus:outline-none 
//     focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 
//     border border-red-100 group"
//     aria-label="Next slide"
//   >
//     <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-600" />
//   </button>
// );

// const BlogSection = () => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["blogs", { limit: 10, page: 1 }],
//     queryFn: () => fetchBlogs({ limit: 10, page: 1 }),
//   });

//   if (isLoading) {
//     return (
//       <div className="min-h-[400px] flex items-center justify-center p-4">
//         <div className="flex flex-col items-center">
//           <div className="w-12 h-12 relative">
//             <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-pulse"></div>
//             <div className="absolute inset-0 border-4 border-t-red-500 rounded-full animate-spin"></div>
//           </div>
//           <p className="mt-4 text-gray-600 animate-pulse">Loading amazing blogs...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-[400px] flex items-center justify-center p-4">
//         <div className="text-center text-red-500 bg-red-50 px-6 py-4 rounded-lg">
//           <p>Error loading blogs: {error.message}</p>
//         </div>
//       </div>
//     );
//   }

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           centerMode: true,
//           centerPadding: "24px",
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 
//             bg-gradient-to-r from-amber-500 to-red-500 
//             text-transparent bg-clip-text">
//             Latest Blogs
//           </h2>
//           <div className="flex justify-center items-center gap-2 mb-6">
//             <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
//             <div className="h-1 w-20 bg-red-500 rounded-full"></div>
//           </div>
//           <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
//             Discover our latest insights, tips, and guides
//           </p>
//         </div>

//         <div className="relative px-2 md:px-8 xl:px-12">
//           <Slider {...settings}>
//             {data?.data.map((post) => (
//               <div key={post._id} className="p-3 md:p-4">
//                 <BlogCard post={post} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>

//       <style jsx>{`
//         .slick-dots {
//           bottom: -40px;
//           display: flex !important;
//           justify-content: center;
//           list-style: none;
//           padding: 0;
//         }
//         .slick-dots li {
//           margin: 0 4px;
//         }
//         .slick-dots li button {
//           width: 8px;
//           height: 8px;
//           border-radius: 9999px;
//           background-color: #fee2e2;
//           border: none;
//           padding: 0;
//           font-size: 0;
//           transition: all 0.3s ease;
//         }
//         .slick-dots li.slick-active button {
//           background-color: #ef4444;
//           width: 24px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BlogSection;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../api/apiCalls";
import { BlogCard } from '../Blog/BlogCard';
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
const BlogSection = () => {

  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { limit: 4, page: 1 }],
    queryFn: () => fetchBlogs({ limit: 4, page: 1 }),
  });

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-t-red-500 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600 animate-pulse">Loading amazing blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="text-center text-red-500 bg-red-50 px-6 py-4 rounded-lg">
          <p>Error loading blogs: {error.message}</p>
        </div>
      </div>
    );
  }

  const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalSlides = data?.data.length || 0;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 
            bg-gradient-to-r from-amber-500 to-red-500 
            text-transparent bg-clip-text">
            {t.blog1}
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-20 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
           {t.blogdec1}
          </p>
        </div>

        <div className="relative px-2 md:px-8 xl:px-12">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {data?.data.map((post) => (
                <div 
                  key={post._id} 
                  className="flex-none w-full md:w-1/2 lg:w-1/3 p-3 md:p-4"
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 
                w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
                flex items-center justify-center transition-all duration-200
                hover:bg-gray-50 hover:shadow-xl focus:outline-none 
                focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 
                border border-red-100 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-600" />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 
                w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
                flex items-center justify-center transition-all duration-200
                hover:bg-gray-50 hover:shadow-xl focus:outline-none 
                focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 
                border border-red-100 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-600" />
              </button>
            )}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-red-500' : 'w-2 bg-red-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;