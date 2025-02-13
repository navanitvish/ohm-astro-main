import { useState } from 'react';
import { X, Heart, ShoppingCart, Star, Loader } from 'lucide-react';
import GemstoneShowcas from './GemstoneShowcas';
import GemstonesFAQ from './GemstonesFAQ';
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchGemstones, postGemstone } from "../../api/apiCalls";
import toast from 'react-hot-toast';

// Loader Component
const LoadingSpinner = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-t-red-500 border-r-red-500 border-b-yellow-500 border-l-yellow-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 font-medium animate-pulse">{message}</p>
    </div>
  );
};

// Product Inquiry Modal Component
const ProductInquiryModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    message: '',
    mobile: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      try {
        setIsSubmitting(true);
        const token = localStorage.getItem('token');
        
        if (!token) {
          toast.error('Please login to submit an inquiry');
          return;
        }

        const payload = {
          gemstoneId: product._id,
          queryType: 'purchase',
          message: formData.message,
          mobile: formData.mobile,
          email: formData.email
        };

        const response = await fetch('https://atro-server.onrender.com/api/astro-services/gemstone-query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Failed to submit inquiry');
        }

        toast.success('Thank you for your inquiry. We will contact you shortly!');
        onClose();
        setFormData({ message: '', mobile: '', email: '' });
      } catch (error) {
        console.error('Error submitting inquiry:', error);
        toast.error('Failed to submit the inquiry. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      toast.error('Please fill in all required fields');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl relative max-h-[80vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <X />
        </button>

        <div className="p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-6">
            Product Inquiry
          </h2>
          
          <div className="flex gap-4 mb-6 p-4 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-24 h-24 object-contain rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.additionalInfo.origin}</p>
              <p className="text-sm text-gray-600">
                {product.additionalInfo.weightInGrams} Grames/ 
                <span>{product.additionalInfo.weightInRatti} Ratti</span>
              </p>
              <p className="text-sm text-gray-600">{product.additionalInfo.carat} carat</p>
              <p className="text-red-500 font-semibold">
                ₹ {Number(product.price).toLocaleString()}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your message"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${
                  errors.mobile ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your mobile number"
                disabled={isSubmitting}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-red-500 text-white py-3 rounded-lg font-semibold transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-600'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <Loader className="w-5 h-5 animate-spin mr-2" />
                  Submitting...
                </div>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative bg-white w-[300px] rounded-2xl border mx-auto border-gray-200 shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group">
        <div 
          className="relative overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105 p-2"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div 
          className="p-5 space-y-2 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 truncate max-w-[70%]">
              {product.name}
            </h3>
            <div className="flex items-center text-yellow-500">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsWishlisted(!isWishlisted);
                }}
                className="bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              >
                <Heart 
                  className={`w-6 h-6 ${
                    isWishlisted 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="text-sm lg:text-xl font-medium text-gray-600 space-y-1">
            <p>Origin: {product.additionalInfo.origin}</p>
            <div className="flex justify-between">
              <span>{product.additionalInfo.weightInGrams} Grams</span>
              <span>{product.additionalInfo.weightInRatti} Ratti</span>
            </div>
            <p>{product.additionalInfo.carat} Carat</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-2xl font-bold text-red-600">
              ₹ {Number(product.price).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <ProductInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

// Hero Banner Component
const HeroBanner = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  
  return (
    <div className="relative w-full h-[300px] bg-[url('/api/placeholder/1920/300')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent">
        <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-yellow-400 font-semibold mb-2">
            {t.GenuineProducts}
          </p>
          <h1 className="text-white text-4xl font-bold max-w-md leading-tight">
            {t.GemstonesShop}
          </h1>
          <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors w-fit">
            {t.ShopNow}
          </button>
        </div>
      </div>
    </div>
  );
};

// Best Sellers Section Component
const BestSellers = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
 
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchGemstones"],
    queryFn: fetchGemstones,
  });

  if (isLoading) {
    return (
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <LoadingSpinner message="Loading our precious gemstones..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="text-red-500 mb-4">
          <X className="w-12 h-12 mx-auto" />
        </div>
        <p className="text-gray-800 font-medium">Error: {error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text text-center mb-12">
        {t.OurBestSellers}
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.gemstones.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Main Component
const GemstoneShowcase = () => {
  return (
    <div>
      <HeroBanner />
      <BestSellers />
      {/* <GemstoneShowcas/> */}
      <GemstonesFAQ/>
    </div>
  );
};

export default GemstoneShowcase;