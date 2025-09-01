import { login, logout } from "../../redux/auth/authSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language/languageSlice.js";
import translations from "../translations/translations";
import { Link } from "react-router-dom";
import { Menu, X, User, Phone, MessageSquare } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";
import UserProfileDropdown from "./UserProfileDropdown";
import MobileMenu from "./MobileMenu";
import SignInPage from "../../pages/SignIn/SignInPage.jsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const language = useSelector((state) => state.language.language);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const t = translations[language];

  const handleLoginSuccess = (userData) => {
    dispatch(login(userData));
    setIsSignInOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen(false);
  };

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "ENG" ? "HIN" : "ENG"));
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 py-2 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex  items-center">
             <img src="/src/assets/cusmotmer_logo.jpg" className="text-2xl w-30 h-14  object-cover md:text-4xl font-semibold"/><span className="text-xl md:text-2xl lg:text-3xl font-bold  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">OHM Astro</span>
             
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/AstrologerListing"
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition-all duration-300"
          >
            <Phone size={20} />
            <span className="font-semibold">{t.talkToAstrologer}</span>
          </Link>

          <Link
            to="/Astrologchat"
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition-all duration-300"
          >
            <MessageSquare size={20} />
            <span className="font-semibold">{t.chatWithAstrologer}</span>
          </Link>

          {/* Language Toggle Switch */}
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${language === "ENG" ? "text-gray-900" : "text-gray-500"}`}>ENG</span>
            <button
              onClick={toggleLanguage}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              style={{
                backgroundColor: language === "HIN" ? "#FCD34D" : "#D1D5DB"
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  language === "HIN" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${language === "HIN" ? "text-gray-900" : "text-gray-500"}`}>हिंदी</span>
          </div>

          <div className="relative">
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
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <User size={20} />
                <span className="font-semibold">{t.signIn}</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <SignInPage onClose={() => setIsSignInOpen(false)} onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;