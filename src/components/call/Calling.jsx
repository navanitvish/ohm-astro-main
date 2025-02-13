import React, { useState, useRef, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { X, Phone, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import SignInPage from './../../pages/SignIn/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authSlice.js'; // Import the login action
// Enhanced Modal Component
const EnhancedModal = ({ isOpen, onClose, children, fullScreen = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className={`relative z-50 bg-white rounded-lg ${
        fullScreen ? 'w-full h-full' : 'max-w-2xl w-full max-h-[90vh]'
      } overflow-y-auto`}>
        {children}
      </div>
    </div>
  );
};

// Video Call Component
const VideoCallComponent = ({ callId, userId, userName, onCallEnd }) => {
  const myMeeting = useRef(null);

  useEffect(() => {
    const initCall = async () => {
      const appID = 1840788911;
      const serverSecret = "b57eeb58ae76e342287e6472b80cc0ac";
      
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        callId,
        userId,
        userName
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      
      zc.joinRoom({
        container: myMeeting.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
        showPreJoinView: true,
        onLeaveRoom: onCallEnd,
      });
    };

    initCall();
  }, [callId, userId, userName, onCallEnd]);

  return (
    <div className="w-full h-full">
      <div ref={myMeeting} className="w-full h-full" />
    </div>
  );
};

// Enhanced Astrologer Card with Direct Call Feature
const EnhancedAstrologerCard = ({ astrologer, user }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth); // Get auth state from Redux
  const [showCallModal, setShowCallModal] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  // Fallback for missing or undefined data
  const safeAstrologer = {
    name: astrologer?.name || 'Astrologer',
    profileImage: astrologer?.profileImage || '/api/placeholder/300/400',
    rating: astrologer?.rating || 'N/A',
    specialties: astrologer?.specialties || [],
    pricing: astrologer?.pricing || 0,
    experience: astrologer?.experience || 0,
  };

  const handleStartCall = () => {
    if (!isAuthenticated) {
      toast.error("Please login to start a call");
      setShowSignInModal(true); // Open the SignInPage modal
      return;
    }
    setShowCallModal(true);
    setShowVideoCall(true);
  };

  // Handle Login Success
  const handleLoginSuccess = (email, token) => {
    dispatch(login({ email, token })); // Dispatch login action to update Redux state
    setShowSignInModal(false); // Close the SignInPage modal
    setShowCallModal(true);    // Open the Video Call modal
    setShowVideoCall(true);    // Set Video Call to true
  };

  const callId = `call_${astrologer?._id}_${user?.id}_${Date.now()}`;

  return (
    <>
      <div className="flex flex-col md:flex-row w-full bg-white rounded-xl shadow-lg border border-red-600 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Profile Image Section */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative">
          <img
            src={safeAstrologer.profileImage}
            alt={`${safeAstrologer.name} profile`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
            {safeAstrologer.rating} <Star className="ml-1 w-3 h-3" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {safeAstrologer.name}
            </h3>
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {safeAstrologer.specialties.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded-full"
                  >
                    {spec.name}
                  </span>
                ))}
              </div>
              <p className="text-sm mx-2">Exp: {safeAstrologer.experience} year</p>
              <p className="text-sm mx-2">Hindi</p>
            </div>
            <div className="text-lg font-bold text-yellow-600 mb-3">
              ₹{safeAstrologer.pricing}/Min
            </div>
          </div>

          {/* Action Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Online Now</span>
            </div>
            <button
              onClick={handleStartCall}
              className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-xs px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-3 h-3 mr-1" /> Call
            </button>
          </div>
        </div>
      </div>

      {/* Video Call Modal */}
      {showVideoCall && (
        <EnhancedModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} fullScreen>
          <VideoCallComponent
            callId={callId}
            userId={user?.id || 'guest-user'}
            userName={user?.name || 'Guest User'}
            onCallEnd={() => {
              setShowVideoCall(false);
              setShowCallModal(false);
            }}
          />
        </EnhancedModal>



      )}

      {/* SignInPage Modal */}
      {showSignInModal && (
        <EnhancedModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)}>
          <SignInPage 
            onClose={() => setShowSignInModal(false)} 
            onLoginSuccess={handleLoginSuccess} // Pass the callback function
          />
        </EnhancedModal>
      )}
    </>
  );
};

export default EnhancedAstrologerCard;