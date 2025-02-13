import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice"; // Import logout action
import translations from "../translations/translations";
import {
  User,
  Wallet,
  Package,
  Heart,
  MessageSquare,
  Phone,
  Video,
  Mail,
  HelpCircle,
  Users,
  LogOut,
} from "lucide-react";

const UserProfileDropdown = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: t.myAccount, link: "/account" },
    // { icon: Wallet, label: t.myWallet, amount: "₹0", link: "/wallet" },
    // { icon: Package, label: t.myPackages, link: "/packages" },
    // { icon: Heart, label: t.myFavorites, link: "/favorites" },
    { icon: MessageSquare, label: t.myChats, link: "/Astrologchat" },
    { icon: Phone, label: t.myCalls, link: "/AstrologerListing" },
    // { icon: Video, label: t.myLiveSession, link: "/live-session" },
    // { icon: Mail, label: t.myMessages, link: "/messages" },
    // { icon: HelpCircle, label: t.myQuestions, link: "/questions" },
    // { icon: User, label: t.myFreeConsultations, link: "/consultations" },
    // { icon: Users, label: t.referAFriend, link: "/refer" },
    { icon: LogOut, label: t.signOut, action: "logout" },
  ];

  const handleMenuClick = (action, link) => {
    if (action === "logout") {
      dispatch(logout()); // Dispatch logout action
      navigate("/"); // Navigate to login page
    } else if (link) {
      navigate(link); // Navigate to the respective link
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
      {/* Menu Items */}
      <div className="py-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item.action, item.link)}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">{item.label}</span>
            {item.amount && (
              <span className="ml-auto text-gray-500">{item.amount}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserProfileDropdown;
