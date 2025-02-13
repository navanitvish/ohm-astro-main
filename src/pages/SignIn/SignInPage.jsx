import { useState } from "react";
import { X } from "lucide-react";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
import MobileOTP from './MobileOTP';  // Import Mobile OTP Component
import EmailOTP from './EmailOTP';    // Import Email OTP Component

const SignInPage = ({ onClose }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
    setIsOTPSent(true);
  };

  const handleSubmitOTP = (otp) => {
    console.log("Signing in with OTP:", otp);
    onClose();
  };

  const handleSubmitEmail = (otp) => {
    console.log("Signing in with email:", email);
    onClose();
  };

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  return (
    <div className="bg-white shadow-md rounded-lg top-3 w-full max-w-lg">
      {/* Close Button */}
      <div className="relative bg-red-500 w-full h-28 text-white p-4 rounded-t-lg">
        <p className="text-2xl text-center font-bold">
          {t.ConsultationExperts}{" "}
          <span className="text-3xl text-yellow-400 italic">
            {" "}
            <br /> {t.free}
          </span>
        </p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 border border-white rounded-full p-1 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <div className="p-8">
        <h2 className="text-2xl text-center font-bold mb-4">{t.SignIn}</h2>
        
        {!isOTPSent && !isEmailLogin && (
          <>
            {/* Mobile OTP or Email Login */}
            <p className="mb-4 text-center text-gray-600">{t.Entermoblie}</p>
            <MobileOTP 
              onSendOTP={handleSendOTP} 
              onSubmitOTP={handleSubmitOTP} 
              countryCode={countryCode} 
              mobileNumber={mobileNumber} 
              setMobileNumber={setMobileNumber} 
              otp={otp} 
              setOTP={setOTP}
            />
            <p
              className="mt-4 text-center underline text-gray-600 cursor-pointer"
              onClick={() => setIsEmailLogin(true)}
            >
              {t.LoginviaEmail}
            </p>
          </>
        )}
        
        {isOTPSent && !isEmailLogin && (
          <MobileOTP 
            onSendOTP={handleSendOTP} 
            onSubmitOTP={handleSubmitOTP} 
            countryCode={countryCode} 
            mobileNumber={mobileNumber} 
            setMobileNumber={setMobileNumber} 
            otp={otp} 
            setOTP={setOTP} 
          />
        )}

        {isEmailLogin && (
          <EmailOTP
            onSendOTP={handleSendOTP}
            onSubmitOTP={handleSubmitEmail}
            email={email}
            setEmail={setEmail}
            otp={otp}
            setOTP={setOTP}
          />
        )}
      </div>
    </div>
  );
};

export default SignInPage;
