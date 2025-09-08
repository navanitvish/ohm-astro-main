import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, Check, Star, Calendar, MessageCircle, Shield } from "lucide-react";
import { 
  fetchSubscriptionPlans, 
  // createOrder, 
  // updateOrderStatus, 
  // submitHandler 
} from "../api/apiCalls";

export default function SubscriptionPlans() {
  const [expandedPlan, setExpandedPlan] = useState(null);
  
  // Fetch plans using React Query
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchSubscriptionPlans"],
    queryFn: fetchSubscriptionPlans
  });

  const handleAccordion = (planId) => {
    if (expandedPlan === planId) {
      setExpandedPlan(null);
    } else {
      setExpandedPlan(planId);
    }
  };

  const handleSelectPlan = async (plan) => {
    try {
      // Create order for the selected plan
      const orderResponse = await createOrder(plan._id);
      
      if (orderResponse.success) {
        const orderDetails = orderResponse.orderDetails;
        
        // Process payment
        const paymentResponse = await submitHandler(orderDetails.amount);
        
        if (paymentResponse.status === 'SUCCESS') {
          // Update order status to completed
          await updateOrderStatus(orderDetails._id, 'completed');
          alert(`Payment Successful, Order ID: ${orderDetails._id}`);
        } else {
          // Update order status to canceled
          await updateOrderStatus(orderDetails._id, 'canceled');
          alert('Payment Failed, Please try again.');
        }
      } else {
        alert('Order Failed, Please try again.');
      }
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert(`Error: ${error.message || 'Failed to initiate payment. Please try again.'}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="ml-4 text-lg text-indigo-800 font-medium">Loading your personalized plans...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-md p-8 bg-white rounded-xl shadow-lg border border-red-100">
          <h2 className="text-2xl font-bold text-red-600 mb-3">Unable to Load Plans</h2>
          <p className="text-gray-700 mb-4">We encountered an issue while retrieving your subscription options. Please try again.</p>
          <p className="text-sm text-gray-500 mb-4">Error details: {error.message}</p>
          <button 
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:ring-4 focus:ring-indigo-200 focus:outline-none font-medium"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  // Extract plans from the response data structure
  const plans = data?.data || [];

  // Create feature lists based on plan properties
  const getPlanFeatures = (plan) => {
    const features = [];
    
    if (plan.price === 0) {
      features.push({
        text: "Basic access to platform",
        icon: <Shield size={18} className="text-indigo-500" />
      });
      features.push({
        text: `${plan.duration} days subscription`,
        icon: <Calendar size={18} className="text-indigo-500" />
      });
    } else {
      features.push({
        text: `${plan.duration} days premium access`,
        icon: <Calendar size={18} className="text-indigo-500" />
      });
      features.push({
        text: `${plan.questions} personal questions allowed`,
        icon: <MessageCircle size={18} className="text-indigo-500" />
      });
      if (plan.includesRemedies) {
        features.push({
          text: "Personalized remedies included",
          icon: <Star size={18} className="text-indigo-500" />
        });
      }
    }
    
    return features;
  };

  // Generate description based on plan data
  const getPlanDescription = (plan) => {
    if (plan.price === 0) {
      return "Free basic subscription with limited features. Experience our platform and discover the power of astrology before upgrading to premium services.";
    } else if (plan.name === "Call") {
      return `Premium consultation package with ${plan.questions} personal questions and direct expert guidance. Includes personalized remedies and detailed astrological insights tailored to your needs.`;
    }
    return `Standard subscription plan valid for ${plan.duration} days with ${plan.questions} questions allowed.`;
  };

  // Get background style based on plan type
  const getPlanStyle = (plan) => {
    if (plan.price === 0) {
      return {
        cardClass: "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200",
        headerClass: "bg-gray-100",
        buttonClass: "bg-gray-600 hover:bg-gray-700 focus:ring-gray-200",
        priceClass: "text-gray-700"
      };
    } else {
      return {
        cardClass: "bg-gradient-to-br from-indigo-50 to-white border-indigo-200",
        headerClass: "bg-indigo-100",
        buttonClass: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-200",
        priceClass: "text-indigo-600"
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Your Astrological Journey
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan to unlock cosmic insights and personalized guidance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.length > 0 ? (
            plans.map((plan) => {
              const style = getPlanStyle(plan);
              
              return (
                <div 
                  key={plan._id} 
                  className={`rounded-2xl shadow-lg overflow-hidden border ${style.cardClass} transform transition duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <div className={`px-6 py-5 ${style.headerClass}`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                      <div className={`text-3xl font-bold ${style.priceClass}`}>
                        {plan.price === 0 ? 'Free' : `₹${plan.price}`}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1">{plan.duration} days validity</p>
                  </div>

                  <div className="p-6">
                    
                    <button
                      onClick={() => handleSelectPlan(plan)}
                      className={`w-full py-3 px-4 rounded-lg shadow-md text-white font-medium text-center ${style.buttonClass} transition-all duration-200 focus:outline-none focus:ring-4`}
                    >
                      {plan.price === 0 ? 'Start Free Plan' : 'Subscribe Now'}
                    </button>
                    
                    {plan.price > 0 && (
                      <p className="text-xs text-center text-gray-500 mt-2">
                        Secure payment • Cancel anytime • No hidden fees
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">No subscription plans available at the moment. Please check back soon.</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need help choosing? <span className="text-indigo-600 font-medium">Contact our support team</span>
          </p>
        </div>
      </div>
    </div>
  );
};