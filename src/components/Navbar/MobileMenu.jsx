import { useState } from "react";
import { X, User,ChevronDown, ChevronUp } from "lucide-react";
import { login, logout } from "../../redux/auth/authSlice";
import { useSelector ,useDispatch} from "react-redux";
import translations from "../translations/translations";
const menuData = {
  AstrologyOnline: [
    { title: "Talk To Astrologer", link: "/AstrologerListing" },
    { title: "Chat With Astrologer", link: "/Astrologchat" },
    // { title: "Marital Life", link: "/" },
    // { title: "Love & Relationships", link: "/" },
    // { title: "Career & Job", link: "/" },
    // { title: "Cheating & Affairs", link: "/" },
    // { title: "Numerology", link: "/numerology" },
    // { title: "Break-Up & Divorce", link: "" },
    // { title: "Vedic Astrology", link: "/vedic-astrology" },
    // { title: "Kids & Education", link: "/kids-education" },
    // { title: "Tarot Reading", link: "/tarot-reading" },
    // { title: "Relationship Counseling", link: "/relationship-counseling" },
  ],
  muhurat: [
    { title: "Choghadiya", link: "/choghadiya" },
    { title: "Rahu Kaal", link: "/rahukaal" },
    { title: "Shubha Hora", link: "/shubhahora" },
    { title: "Gowri Panchangam", link: "/gowri" },
  ],
  // onlinePuja: [
  //   { title: "Love and Break-up", link: "/love-breakup", isNew: true },
  //   { title: "Marriage and Divorce Issues", link: "/marriage-divorce" },
  //   { title: "Grah and Nakshatra Shanti Puja", link: "/grah-shanti" },
  //   { title: "Manokamna Poorti Pujas", link: "/manokamna-poorti" },
  //   { title: "Money and Debt", link: "/money-debt" },
  // ],
  horoscope: [
    { title: "Daily Horoscope", link: "/DailyHoroscope" },
    { title: "Monthly Horoscope", link: "/monthly-horoscope" },
    { title: "Yearly Horoscope", link: "/yearly-horoscope" },
    { title: "Today's Panchang", link: "/Panchangs" },
  ],
  freeServices: [
    {
      title: "Vrat and Upvaas",
      submenu: [
        { title: "Purnima Vrat", link: "/Purnima" },
        { title: "Amavasya Dates", link: "/amavasya" },
        { title: "Ekadashi Vrat", link: "/ekadashi" },
        { title: "Pradosh Vrat", link: "/pradoshvrat" },
        { title: "Sankashti Chaturthi", link: "/sankashti" },
        { title: "Vinayaka Chaturthi", link: "/vinayaka" },
        { title: "Sankranti Dates", link: "/sankranti" },
        { title: "Satyanarayan Puja", link: "/satyanarayan" },
      ],
    },
  ],
};

import { Link } from "react-router-dom"; // If using react-router-dom
import UserProfileDropdown from "./UserProfileDropdown";
import SignInPage from "../../pages/SignIn/SignInPage";

const MobileMenu = ({ isOpen, onClose }) => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
 
  const [isProfileOpen, setIsProfileOpen] = useState(false);

 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
 
  const handleLoginSuccess = (userData) => {
    dispatch(login(userData));
    setIsSignInOpen(false);
  };
  

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen(false);
  };
  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto top-20">
      <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
        {/* <h2 className="text-xl font-semibold">{t.menu || "Menu"}</h2> */}
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-4">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-4">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center p-3 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold capitalize">
                {t[category] || category}
              </span>
              {expandedCategories.includes(category) ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {expandedCategories.includes(category) && (
              <div className="pl-4 mt-2 space-y-1">
                {items.map((item) => (
                  <div key={item.title}>
                    <Link
                      to={item.link || "#"}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span>
                        {t[item.title.toLowerCase().replace(/\s+/g, "")] ||
                          item.title}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                          {t.New || "New"}
                        </span>
                      )}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.link || "#"}
                            className="p-3 hover:bg-gray-50 rounded-lg flex transition-colors"
                          >
                            {t[
                              subItem.title.toLowerCase().replace(/\s+/g, "")
                            ] || subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Add Buttons Below */}
        <div className="mt-6 space-y-4 flex-wrap">
          <Link
            to="/AstrologerListing"
            className="block text-center p-4 bg-yellow-500 text-black rounded-full hover:bg-white  hover:border-2 hover:border-yellow-500 transition-colors"
          >
            {t["talktoastrologer"] || "Talk To Astrologer"}
          </Link>
          <Link
            to="/Astrologchat"
            className="block text-center p-4 bg-yellow-500 text-black rounded-full hover:bg-white hover:border-2 hover:border-yellow-500 transition-colors"
          >
            {t["chatwithastrologer"] || "Chat With Astrologer"}
          </Link>

          {/* <Link
            to="/Astrologchat"
            className="block text-center p-4 bg-yellow-500 text-black rounded-full hover:bg-white hover:border-2 hover:border-yellow-500 transition-colors"
          >
            {t["chatwithastrologer"] || "Chat With Astrologer"}
          </Link> */}
        </div>


        <div className="flex justify-center items-center">
            {isAuthenticated ? (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProfileOpen(!isProfileOpen);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <User size={20} />
                  <span className="font-semibold">{user?.email || "User"}</span>
                </button>

                {isProfileOpen && (
                  <UserProfileDropdown
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                    language={language}
                    onLogout={handleLogout}
                  />
                )}
              </>
            ) : (
              <button
                onClick={() => setIsSignInOpen(true)}
                className="flex self-center py-6 items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <div className="flex  px-8 py-2 bg-yellow-500 border  border-orange-700 rounded-full">
                <User size={20} />
                <span className="font-semibold  ">{t.signIn}</span>
                </div>
              </button> 
            )}
          </div>

          {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <SignInPage onClose={() => setIsSignInOpen(false)} onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
      </div>
    </div>
  );
};

export default MobileMenu;
