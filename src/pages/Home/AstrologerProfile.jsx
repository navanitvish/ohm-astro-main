import { useParams, Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchastrologers } from "../../api/apiCalls";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { 
  FiMail, 
  FiPhone, 
  FiStar, 
  FiClock, 
  FiBookOpen, 
  FiUser, 
  FiCalendar, 
  FiArrowLeft,
  FiMessageCircle,
  FiVideo,
  FiMapPin,
  FiAward
} from "react-icons/fi";

const AstrologerDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  
  // Get astrologer data from navigation state if available
  const astrologerFromState = location.state?.astrologerData;
  
  // If we don't have data from state, fetch it
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchTopRatedAstrologers"],
    queryFn: fetchastrologers,
    // Skip the query if we already have the data from state
    enabled: !astrologerFromState
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-amber-50">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
        <p className="mt-6 text-gray-700 font-medium text-lg">Loading astrologer details...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-amber-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
          <div className="text-red-500 text-4xl mb-4 flex justify-center">⚠️</div>
          <h2 className="text-xl font-bold text-center mb-4">Error Loading Data</h2>
          <p className="text-gray-600 text-center">Error fetching astrologer details: {error.message}</p>
          <div className="mt-6">
            <Link to="/" className="block w-full text-center bg-gradient-to-r from-pink-500 to-amber-500 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-amber-600 transition-all">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Use data from state if available, otherwise find it from the fetched data
  const astrologer = astrologerFromState || data?.data.find(astro => 
    astro._id === id || astro.id === id
  );
  
  if (!astrologer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-amber-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
          <div className="text-amber-500 text-4xl mb-4 flex justify-center">🔍</div>
          <h2 className="text-xl font-bold text-center mb-4">Astrologer Not Found</h2>
          <p className="text-gray-600 text-center mb-6">We couldn't find the astrologer you're looking for.</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-md font-bold mb-3">Debug Information:</h3>
            <p className="mb-2"><span className="font-medium">ID from URL:</span> {id}</p>
            <p className="mb-2"><span className="font-medium">Type of ID:</span> {typeof id}</p>
            <p className="mb-2"><span className="font-medium">Number of astrologers:</span> {data?.data?.length || 0}</p>
            <p className="mb-2"><span className="font-medium">Data from location state:</span> {astrologerFromState ? 'Available' : 'Not available'}</p>
          </div>
          
          <div className="mt-6">
            <Link to="/" className="block w-full text-center bg-gradient-to-r from-pink-500 to-amber-500 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-amber-600 transition-all">
              Return to All Astrologers
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-pink-50 to-amber-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x600')] bg-center bg-cover"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 relative">
          <Link to="/" className="inline-flex items-center text-white hover:text-white/80 font-medium mb-6 transition-colors">
            <FiArrowLeft className="mr-2" /> {t.backToAstrologers || "Back to All Astrologers"}
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg mx-auto md:mx-0">
                <img
                  src={astrologer.profileImage}
                  alt={astrologer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/4 md:pl-6 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{astrologer.name}</h1>
              
              <div className="flex items-center justify-center md:justify-start mt-2 mb-3">
                <div className="text-yellow-300 flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.round(astrologer.rating) ? "fill-current" : ""}`} 
                    />
                  ))}
                </div>
                <span className="text-white font-medium">
                  {astrologer.rating.toFixed(1)} ({astrologer.reviews || "50"}+ {t.reviews || "reviews"})
                </span>
              </div>
              
              <p className="text-white/90 max-w-2xl mb-4">
                {astrologer.shortBio || astrologer.bio?.substring(0, 150) + "..."}
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center">
                  <FiClock className="mr-2" />
                  <span>{astrologer.experience || "0"} {t.years || "years"} {t.experience || "experience"}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center">
                  <FiUser className="mr-2" />
                  <span>{astrologer.clients || "50"}+ {t.clients || "clients"}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center">
                  <FiMapPin className="mr-2" />
                  <span>{astrologer.location || "New Delhi, India"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff" className="w-full h-auto">
            <path d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
              {/* Tabs Navigation */}
              <div className="flex border-b">
                <button className="px-6 py-4 font-medium text-pink-600 border-b-2 border-pink-600">
                  {t.about || "About"}
                </button>
                {/* <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-800">
                  {t.reviews || "Reviews"}
                </button>
                <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-800">
                  {t.articles || "Articles"}
                </button> */}
              </div>
              
              <div className="p-6 md:p-8">
                {/* About Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <FiUser className="text-pink-500" />
                    </span>
                    {t.aboutAstrologer || "About Astrologer"}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{astrologer.bio}</p>
                </div>
                
                {/* Specialization Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                      <FiStar className="text-amber-500" />
                    </span>
                    {t.specialization || "Specialization"}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {astrologer.specialization?.map((specialty, index) => (
                      <span key={index} className="bg-pink-50 text-pink-700 px-4 py-2 rounded-lg text-sm">
                        {specialty}
                      </span>
                    )) || <span className="text-gray-600">Information not available</span>}
                  </div>
                </div>
                
                {/* Education Section */}
                {/* <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <FiBookOpen className="text-blue-500" />
                    </span>
                    {t.education || "Education"}
                  </h2>
                  <p className="text-gray-600">{astrologer.education || "Information not available"}</p>
                </div> */}
                
                {/* Awards & Recognition */}
                {/* <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <FiAward className="text-purple-500" />
                    </span>
                    {t.awardsRecognition || "Awards & Recognition"}
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3 mt-1">
                        🏆
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {t.bestAstrologer || "Best Astrologer of the Year"}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {t.awardDescription || "Recognized for exceptional accuracy and client satisfaction"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-1">
                        🎓
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {t.certifiedExpert || "Certified Vastu Expert"}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {t.certificationDescription || "Advanced certification in Vastu Shastra principles"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="md:col-span-1">
            {/* Availability & Pricing Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <FiCalendar className="mr-2 text-pink-500" />
                {t.availabilityPricing || "Availability & Pricing"}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">{t.consultationTypes || "Consultation Types"}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center">
                        <FiVideo className="text-blue-500 mr-2" />
                        <span>{t.videoCall || "Video Call"}</span>
                      </div>
                      <span className="font-medium">₹{astrologer.pricing?.video || 299}/{t.session || "session"}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center">
                        <FiPhone className="text-green-500 mr-2" />
                        <span>{t.audioCallChargePerMinute || "Voice Call"}</span>
                      </div>
                      <span className="font-medium">₹{astrologer.audioCallChargePerMinute || 799}/{t.session || "session"}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center">
                        <FiMessageCircle className="text-amber-500 mr-2" />
                        <span>{t.chat || "Chat"}</span>
                      </div>
                      <span className="font-medium">₹{astrologer.chatChargePerMinute || 599}/{t.session || "session"}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">{t.availability || "Availability"}</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t.today || "Today"}</span>
                      <span className="text-green-600 font-medium">{t.available || "Available"}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {astrologer.availableSlots?.map((slot, index) => (
                        <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                          {slot}
                        </span>
                      )) || (
                        <>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                            10:00 AM
                          </span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                            2:30 PM
                          </span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                            5:15 PM
                          </span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                            8:00 PM
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <FiPhone className="mr-2 text-pink-500" />
                {t.contactInformation || "Contact Information"}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FiMail className="text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{t.email || "Email"}</h4>
                    <p className="text-gray-600 break-all">{astrologer.email || "info@example.com"}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <FiPhone className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{t.phone || "Phone"}</h4>
                    <p className="text-gray-600">{astrologer.phoneNumber || "+91 98765 43210"}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Languages Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <FiBookOpen className="mr-2 text-pink-500" />
                {t.languages || "Languages"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {astrologer.languages?.map((language, index) => (
                  <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                    {language}
                  </span>
                )) || (
                  <>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">English</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Hindi</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerDetails;