import React, { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, Star, Moon, Sun, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const EnhancedAstrologyLanding = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      badge: t.badge1,
      title: t.title1,
      subtitle: t.subtitle1,
      description: t.description1,
      videoSrc: "https://cdn.pixabay.com/video/2024/02/04/199293-909903179_tiny.mp4",
      features: [
       
      ],
    },
    {
      id: 2,
      badge: t.badge2,
      title: t.title2,
      subtitle: t.subtitle2,
      description: t.description2,
      videoSrc: "https://cdn.pixabay.com/video/2024/04/13/207868_tiny.mp4",
      features: [
       
      ],
    },
  ];

  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    
    autoPlayIntervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleSlideChange = (direction) => {
    stopAutoPlay();
    setIsAutoPlaying(false);
    
    const newIndex = direction === 'next' 
      ? (activeSlide + 1) % slides.length
      : (activeSlide - 1 + slides.length) % slides.length;
    
    setActiveSlide(newIndex);
    
    // Restart auto-play after manual navigation
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const SlideVideo = ({ src }) => (
    <div className="bg-gray-900 rounded-xl md:rounded-2xl h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden relative">
      <video
        key={src}
        className="w-full h-[200px] md:h-[300px] object-cover rounded-xl"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Navigation Buttons */}
      {/* <button 
        onClick={() => handleSlideChange('prev')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button 
        onClick={() => handleSlideChange('next')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button> */}
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-amber-500 to-pink-500 relative overflow-hidden min-h-screen">
      {/* Rest of the component remains the same as previous implementation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <SlideVideo src={slides[activeSlide].videoSrc} />

            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <span className="px-3 py-1 md:px-4 md:py-2 bg-yellow-500/30 text-white rounded-full text-xs md:text-sm inline-block">
                  {slides[activeSlide].badge}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400">
                  {slides[activeSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-white/80">{slides[activeSlide].subtitle}</p>
                <p className="text-sm md:text-base text-white/70">{slides[activeSlide].description}</p>
              </div>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {slides[activeSlide].features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-yellow-500/20 transition"
                  >
                    {feature.icon}
                    <span className="text-sm md:text-base text-white">{feature.text}</span>
                  </div>
                ))}
              </div> */}

              <button className="w-full md:w-auto py-3 px-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-full hover:from-yellow-500 hover:to-red-600 transition-all text-sm md:text-base">
                {t.StartConsultation}
              </button>

              <div className="text-sm md:text-base text-white/80">
               App Available on : <span className="underline "><Link to="https://play.google.com/store/apps/details?id=com.ohmastroVendor"> Android</Link></span>
              </div>
    
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="mt-6 md:mt-8 flex justify-center space-x-3 md:space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition-all ${
                index === activeSlide
                  ? "bg-yellow-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Existing CTA Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12">
          <Link to="/AstrologerListing" className="flex items-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-yellow-500/20 transition">
            <Phone className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
            <div className="ml-3 md:ml-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">{t.TalktoAstrologer}</h2>
            </div>
          </Link>

          <Link to="/Astrologchat" className="flex items-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-blue-500/20 transition">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
            <div className="ml-3 md:ml-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">{t.ChatwithAstrologer}</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAstrologyLanding;