import { useState, useEffect } from "react";
import { Phone, Lock, ArrowRight, RotateCcw } from "lucide-react";

const MobileOTP = ({ onSendOTP, onSubmitOTP, countryCode, mobileNumber, setMobileNumber, otp, setOTP }) => {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Cooldown period in seconds

  // Handle resend OTP timer
  useEffect(() => {
    let timer;
    if (isResendDisabled && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
      setResendTimer(30); // Reset timer
    }
    return () => clearInterval(timer);
  }, [isResendDisabled, resendTimer]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (mobileNumber) {
      onSendOTP();
      setIsOTPSent(true);
      setIsResendDisabled(true);
    }
  };

  const handleResendOTP = () => {
    onSendOTP();
    setIsResendDisabled(true);
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    onSubmitOTP(otp);
  };

  return (
    <div>
      {/* Mobile Number Input */}
      <p className="mb-4 text-center text-gray-600">Enter mobile number</p>
      <form onSubmit={handleSendOTP}>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block mb-2 text-gray-700">Mobile Number</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <select
              value={countryCode}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="px-3 py-2 border-r border-gray-300 outline-none bg-white"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <div className="px-4 py-2 text-gray-600"><Phone size={20} /></div>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg outline-none"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Send OTP
        </button>
      </form>

      {/* OTP Input */}
      {isOTPSent && (
        <form onSubmit={handleSubmitOTP}>
          <div className="mb-4">
            <label htmlFor="otp" className="block mb-2 text-gray-700">OTP</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <div className="px-4 py-2 text-gray-600"><Lock size={20} /></div>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg outline-none"
                placeholder="Enter the OTP"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            Sign In
            <ArrowRight size={20} className="ml-2" />
          </button>
        </form>
      )}

      {/* Resend OTP Button */}
      {isOTPSent && (
        <div className="mt-4 text-center">
          <button
            onClick={handleResendOTP}
            disabled={isResendDisabled}
            className={`${
              isResendDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center`}
          >
            <RotateCcw size={20} className="mr-2" />
            {isResendDisabled ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileOTP;
