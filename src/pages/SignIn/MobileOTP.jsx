import { useState, useEffect } from "react";
import { Phone, Lock, ArrowRight, RotateCcw, CheckCircle, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { sendMobileOTP, mobileOtpVerify } from "../../api/apiCalls";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";

const MobileOTP = () => {
  // State variables
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Send OTP mutation
  const sendOTPMutation = useMutation({
    mutationFn: (mobile) => {
      console.log("Sending to API:", mobile);
      setDebugInfo(`Sending: ${mobile}`);
      // Send only the mobile number as expected by the API
      return sendMobileOTP(mobile);
    },
    onSuccess: (data) => {
      console.log("OTP Send Response:", data);
      setDebugInfo(`Response: ${JSON.stringify(data)}`);
      
      // Check for success indicators
      if (data.success || data.status === 'success' || data.msg?.includes('sent') || data.message?.includes('sent')) {
        setIsOTPSent(true);
        setIsResendDisabled(true);
        setSuccess("OTP sent successfully to your mobile number");
        setError("");
        toast.success("OTP sent successfully to your mobile number");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        // Handle case where API returns failure but OTP might still be sent
        const message = data.msg || data.message || "OTP sent. Please check your mobile.";
        setIsOTPSent(true);
        setIsResendDisabled(true);
        setSuccess(message);
        setError("");
        toast.success(message);
        setTimeout(() => setSuccess(""), 3000);
      }
    },
    onError: (error) => {
      console.error("OTP Send Error:", error);
      setDebugInfo(`Error: ${JSON.stringify(error.response?.data || error.message)}`);
      
      // Check if this is actually the expected response pattern
      if (error.response?.data?.msg === "Provide OTP to verify" || 
          error.response?.status === 200 ||
          error.response?.data?.success === false) {
        // This might be the expected response - proceed to OTP input
        setIsOTPSent(true);
        setIsResendDisabled(true);
        setSuccess("Please enter the OTP sent to your mobile number");
        setError("");
        toast.success("Please enter the OTP sent to your mobile number");
        setTimeout(() => setSuccess(""), 3000);
        return;
      }
      
      // Handle actual errors
      let errorMessage = "Failed to send OTP. Please try again.";
      
      if (error.response?.data?.msg) {
        errorMessage = error.response.data.msg;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      setSuccess("");
      toast.error(errorMessage);
    }
  });

  // Verify OTP mutation
  const verifyOTPMutation = useMutation({
    mutationFn: (otpData) => {
      console.log("Verifying OTP:", otpData);
      setDebugInfo(`Verifying: ${JSON.stringify(otpData)}`);
      return mobileOtpVerify(otpData);
    },
    onSuccess: (data) => {
      console.log("OTP Verify Response:", data);
      setDebugInfo(`Verify Response: ${JSON.stringify(data)}`);
      
      // Check if verification was successful
      if (data.success || data.status === 'success' || data.verified || data.msg?.includes('success') || data.message?.includes('success')) {
        setSuccess("Authentication successful!");
        setIsAuthenticated(true);
        setError("");
        toast.success("Authentication successful!");
        setTimeout(() => setSuccess(""), 3000);
        
        // Dispatch login action
        dispatch(login({ mobile: mobileNumber }));
        
        // Navigate to dashboard
        navigate("/");
      } else {
        // Handle verification failure
        const errorMessage = data.msg || data.message || "OTP verification failed. Please try again.";
        setError(errorMessage);
        setSuccess("");
        toast.error(errorMessage);
      }
    },
    onError: (error) => {
      console.error("OTP Verification Error:", error);
      setDebugInfo(`Verify Error: ${JSON.stringify(error.response?.data || error.message)}`);
      
      let errorMessage = "Failed to verify OTP. Please try again.";
      
      if (error.response?.data?.msg) {
        errorMessage = error.response.data.msg;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      setSuccess("");
      toast.error(errorMessage);
    }
  });

  // Handle resend OTP timer
  useEffect(() => {
    let timer;
    if (isResendDisabled && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
      setResendTimer(30);
    }
    return () => clearInterval(timer);
  }, [isResendDisabled, resendTimer]);

  // Function to send OTP
  const handleSendOTP = async (e) => {
    if (e) e.preventDefault();
    
    // Enhanced validation
    if (!mobileNumber || mobileNumber.trim().length === 0) {
      setError("Please enter a mobile number");
      return;
    }
    
    if (mobileNumber.trim().length < 10) {
      setError("Please enter a valid mobile number (minimum 10 digits)");
      return;
    }

    setError("");
    setDebugInfo("");
    
    const cleanMobile = mobileNumber.trim();
    console.log("Attempting to send OTP to:", cleanMobile);
    
    // Send the mobile number in the format the API expects
    sendOTPMutation.mutate(cleanMobile);
  };

  // Function to resend OTP
  const handleResendOTP = () => {
    if (isResendDisabled) return;
    setOTP(""); // Clear previous OTP
    handleSendOTP();
    setIsResendDisabled(true);
  };

  // Function to verify OTP
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    
    // Enhanced validation
    if (!otp || otp.trim().length === 0) {
      setError("Please enter the OTP");
      return;
    }
    
    if (otp.trim().length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setError("");
    setDebugInfo("");
    
    // Call the mutation with the exact format that works in Postman
    verifyOTPMutation.mutate({
      mobile: mobileNumber.trim(),
      otp: otp.trim()
    });
  };

  // Get loading states from mutations
  const isLoading = sendOTPMutation.isPending || verifyOTPMutation.isPending;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Mobile Authentication</h2>
      
      {/* Debug Info */}
      {debugInfo && (
        <div className="mb-4 p-3 bg-gray-100 text-gray-700 rounded-lg text-sm">
          <strong>Debug:</strong> {debugInfo}
        </div>
      )}
      
      {/* Success and Error Messages */}
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center">
          <CheckCircle size={20} className="mr-2" />
          {success}
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
          <AlertCircle size={20} className="mr-2" />
          {error}
        </div>
      )}

      {isAuthenticated ? (
        <div className="text-center py-8">
          <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
          <h3 className="text-xl font-bold">Authentication Successful</h3>
          <p className="text-gray-600 mt-2">You have been successfully authenticated!</p>
        </div>
      ) : (
        <>
          {/* Mobile Number Input */}
          {!isOTPSent && (
            <>
              <p className="mb-4 text-center text-gray-600">Enter your mobile number to receive OTP</p>
              <form onSubmit={handleSendOTP}>
                <div className="mb-4">
                  <label htmlFor="mobileNumber" className="block mb-2 text-gray-700">Mobile Number</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
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
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${
                    isLoading 
                      ? "bg-gray-400" 
                      : "bg-yellow-400 hover:bg-yellow-500"
                  } text-black font-bold py-2 px-4 rounded-lg transition-colors`}
                >
                  {sendOTPMutation.isPending ? "Sending..." : "Send OTP"}
                </button>
              </form>
            </>
          )}

          {/* OTP Input */}
          {isOTPSent && (
            <>
              <p className="mb-4 text-center text-gray-600">
                Enter the OTP sent to {countryCode} {mobileNumber}
              </p>
              <form onSubmit={handleVerifyOTP}>
                <div className="mb-4">
                  <label htmlFor="otp" className="block mb-2 text-gray-700">Enter OTP</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <div className="px-4 py-2 text-gray-600"><Lock size={20} /></div>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setOTP(value);
                      }}
                      className="flex-1 px-4 py-2 rounded-lg outline-none"
                      placeholder="Enter the 6-digit OTP"
                      maxLength={6}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${
                    isLoading 
                      ? "bg-gray-400" 
                      : "bg-yellow-400 hover:bg-yellow-500"
                  } text-black font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center`}
                >
                  {verifyOTPMutation.isPending ? "Verifying..." : "Verify OTP"}
                  {!isLoading && <ArrowRight size={20} className="ml-2" />}
                </button>
              </form>

              {/* Change Number Option */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    setIsOTPSent(false);
                    setOTP("");
                    setError("");
                    setSuccess("");
                    setDebugInfo("");
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Change mobile number
                </button>
              </div>

              {/* Resend OTP Button */}
              <div className="mt-4 text-center">
                <button
                  onClick={handleResendOTP}
                  disabled={isResendDisabled || isLoading}
                  className={`${
                    isResendDisabled || isLoading
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center mx-auto`}
                >
                  <RotateCcw size={20} className="mr-2" />
                  {isResendDisabled ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
                </button>
              </div>
            </>
          )}
        </>
      )}

      
    </div>
  );
};

export default MobileOTP;