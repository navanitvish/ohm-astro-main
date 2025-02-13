


import { useState } from "react";
import { useQuery,useMutation } from "@tanstack/react-query";
import { fetchastrologers,addEnquiry } from "../api/apiCalls";
import { Star, Phone, X ,Home} from 'lucide-react';
import { Link } from "react-router-dom";
// Import addEnquiry function // Replace with the correct icon library import
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import EnhancedAstrologerCard from "../components/call/Calling";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

// Custom Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative z-50 bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

// Call Modal Component

const CallIntakeForm = ({ isOpen, onClose, }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    dob: "",
    dot: "",
    birthPlace: "",
    maritalStatus: "",
    reason: "",
    mobile: "",
    type: "call",
  });


  console.log("formData", formData);

  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: addEnquiry,
    onSuccess: (data) => {
      toast.success("Enquiry submitted successfully!", { duration: 3000 });
      console.log("Enquiry added successfully:", data);
      onClose();
    },
    onError: (error) => {
      toast.error(error.message || "There was an error submitting the enquiry. Please try again.", {
        duration: 4000,
      });
      console.error("Error submitting enquiry:", error);
    },
  });

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.fname.trim()) newErrors.fname = "First name is required";
    if (!formData.lname.trim()) newErrors.lname = "Last name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.birthPlace.trim()) newErrors.birthPlace = "Place of birth is required";
    if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.reason.trim()) newErrors.reason = "Topic of concern is required";

    // Mobile number validation
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      mutation.mutate(formData);
    } else {
      toast.error("Please fill in all required fields correctly.", { duration: 3000 });
      const firstError = document.querySelector(".error-field");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const InputField = ({ label, name, type = "text", required = false, options, value }) => {
    const hasError = errors[name];
    const inputClasses = `w-full p-2 border rounded ${
      hasError ? 'border-red-500 bg-red-50' : 'border-gray-300'
    } focus:outline-none focus:ring-2 focus:ring-yellow-400`;

    return (
      <div className={`${hasError ? 'error-field' : ''}`}>
        <label className="block text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {type === "select" ? (
          <select
            value={value}
            onChange={(e) => handleInputChange(name, e.target.value)}
            className={inputClasses}
          >
            <option value="">--Select--</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => handleInputChange(name, e.target.value)}
            className={inputClasses}
          />
        )}
        {hasError && <p className="text-red-500 text-sm mt-1">{hasError}</p>}
      </div>
    );
  };

  // Updated enum values to match backend schema
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];

  const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
    { value: "Separated", label: "Separated" }
  ];

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Call Intake Form</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg mb-4">
            <p>Yay! You are eligible for the first 3-minute free session.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="First Name"
                name="fname"
                required
                value={formData.fname}
              />
              <InputField
                label="Last Name"
                name="lname"
                required
                value={formData.lname}
              />
            </div>

            <InputField
              label="Gender"
              name="gender"
              type="select"
              required
              value={formData.gender}
              options={genderOptions}
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Date of Birth"
                name="dob"
                type="date"
                required
                value={formData.dob}
              />
              <InputField
                label="Time of Birth"
                name="dot"
                type="time"
                value={formData.dot}
              />
            </div>

            <InputField
              label="Place of Birth"
              name="birthPlace"
              required
              value={formData.birthPlace}
            />

            <InputField
              label="Marital Status"
              name="maritalStatus"
              type="select"
              required
              value={formData.maritalStatus}
              options={maritalStatusOptions}
            />

            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select className="w-24 p-2 border rounded-l border-r-0">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className={`flex-1 p-2 border rounded-r ${
                    errors.mobile ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <InputField
              label="Topic of Concern"
              name="reason"
              required
              value={formData.reason}
            />

            <button
              type="submit"
              disabled={mutation.isLoading}
              className={`w-full text-black font-semibold py-2 px-4 rounded transition-colors ${
                mutation.isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500"
              }`}
            >
              {mutation.isLoading 
                ? "Submitting..." 
                : `Start Call with `}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};






const SkeletonCard = () => (
  <div className="flex flex-col md:flex-row w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">
    <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-gray-200">
      <div className="w-full h-full"></div>
      <div className="absolute top-3 left-3 bg-gray-300 w-16 h-6 rounded-full"></div>
    </div>
    <div className="w-3/5 p-4 flex flex-col justify-between">
      <div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="flex flex-wrap gap-1 mb-3">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-14"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
        <div className="h-6 bg-gray-200 rounded w-28"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-8 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
  </div>
);

const NoResultsFound = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
    <div className="text-gray-400 mb-4">
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
    <p className="text-gray-500 text-center">
      We couldn't find any astrologers matching your search. Try adjusting your filters or search terms.
    </p>
  </div>
);

const AstrologerListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("All");
  const [sortBy, setSortBy] = useState("All");

  const { data: astrologerData, isLoading, error } = useQuery({
    queryKey: ["astrologers"],
    queryFn: fetchastrologers,
  });

  const specializations = [
    "All",
    "Marital Life",
    "Love & Relationship",
    "Career & Job",
    "Cheating & Affairs",
    "Finance & Business",
    "Break-Up & Divorce",
    "Vedic Astrology",
    "Kids & Education",
    "Tarot Reading",
    "Horary Astrology",
    "Psychic Reading",
    "Numerology",
    "Palm Reading",
    "Relationship Counseling",
  ];

  const sortOptions = [
    "Online",
    "Newest",
    "Oldest",
    "Lowest Price",
    "Highest Price",
    "Highest Rating",
    "Highest Review Count",
  ];

  const sortAstrologers = (astrologers) => {
    switch (sortBy) {
      case "Newest":
        return [...astrologers].sort(
          (a, b) => new Date(b.joinedDate) - new Date(a.joinedDate)
        );
      case "Oldest":
        return [...astrologers].sort(
          (a, b) => new Date(a.joinedDate) - new Date(b.joinedDate)
        );
      case "Lowest Price":
        return [...astrologers].sort(
          (a, b) => a.originalPrice - b.originalPrice
        );
      case "Highest Price":
        return [...astrologers].sort(
          (a, b) => b.originalPrice - a.originalPrice
        );
      case "Highest Rating":
        return [...astrologers].sort((a, b) => b.rating - a.rating);
      case "Highest Review Count":
        return [...astrologers].sort((a, b) => b.reviews - a.reviews);
      default:
        return astrologers;
    }
  };

  const filteredAstrologers = astrologerData?.data
  ? sortAstrologers(
      astrologerData.data.filter((astrologer) => {
        const matchesSearch =
          (astrologer?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
          (astrologer?.specializations || []).some((spec) =>
            (spec || '').toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          (astrologer?.language || []).some((lang) =>
            (lang || '').toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchesSpecialization =
          specializationFilter === "All" ||
          (astrologer?.specializations || []).includes(specializationFilter);

        return matchesSearch && matchesSpecialization;
      })
    )
  : [];



console.log("specializations" , astrologerData)
  if (isLoading) return (
    <div>
      <nav className="bg-rose-500 text-white p-4">
        <div className="container mx-auto flex items-center gap-2">
          <span><Link to="/"><Home className="w-5 h-5" /></Link></span>
          <span><span className="font-medium">Call Astrologers</span></span>
        </div>
      </nav>
      <div className="bg-yellow-400 p-4 md:p-6 mb-4 md:mb-8 animate-pulse">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto px-4">
          <div className="space-y-4 w-full md:w-2/3">
            <div className="h-8 bg-yellow-300 rounded w-full md:w-3/4"></div>
            <div className="h-6 bg-yellow-300 rounded w-full md:w-2/3"></div>
            <div className="h-10 bg-white rounded-full w-40"></div>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 bg-yellow-300 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-4 mb-4">
          <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-48 h-10 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-48 h-10 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-rose-500 text-white p-4 sticky top-0 z-30 shadow-md">
        <div className="container mx-auto flex items-center gap-2">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Home className="w-5 h-5" />
          </Link>
          <span className="font-medium">Call Astrologers</span>
        </div>
      </nav>

      {/* Hero Section - Made responsive */}
      <div className="bg-yellow-400 p-4 md:p-6 mb-4 md:mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto px-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Need guidance for your life problems?
            </h1>
            <h2 className="text-xl md:text-2xl mb-4">
              Talk to the best Astrologers in India
            </h2>
            <div className="bg-white text-black px-4 py-2 rounded-full inline-block">
              First Session FREE
            </div>
          </div>
          <img
            src="https://cdn.anytimeastro.com/dashaspeaks/psychics/13ecd392-f1e7-4047-98ce-76600fe99498.png"
            alt="Astrologer"
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Search and Filters - Made responsive */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search astrologers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <select
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded-md flex-1 md:w-48"
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 p-2 rounded-md flex-1 md:w-48"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid - Update for better mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredAstrologers.length > 0 ? (
            filteredAstrologers.map((astrologer) => (
              <EnhancedAstrologerCard 
    key={astrologer._id} 
    astrologer={astrologer}

  />
              
            ))
          ) : (
            <NoResultsFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default AstrologerListing;
