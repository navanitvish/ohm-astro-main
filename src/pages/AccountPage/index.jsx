import React, { useState, useEffect } from 'react';
import { Camera, Loader2, Save } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import AstroLoader from '../../components/PanchangLoader';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-red-200 border-t-red-500 rounded-full animate-spin"></div>
      <div className="mt-4 text-gray-600 font-medium">Loading your profile...</div>
      <div className="mt-2 text-sm text-gray-500">Please wait a moment</div>
    </div>
  </div>
);

// Error Component
const ErrorState = ({ message, retry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center bg-white p-8 rounded-lg shadow-lg">
      <div className="text-red-500 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{message}</h3>
      <button
        onClick={retry}
        className="mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-md hover:from-amber-600 hover:to-red-600 transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  </div>
);

const AccountPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    role: "customer",
    firstName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: "",
    timeOfBirth: "",
    phoneNumber: "",
    profilePic: "",
    address: {
      city: "",
      pinCode: "",
      location: "",
      State: ""
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://atro-server.onrender.com/api/users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch profile');
      
      const result = await response.json();
      if (result.success && result.data) {
        setFormData({
          email: result.data.email || '',
          role: result.data.role || 'customer',
          firstName: result.data.firstName || '',
          lastName: result.data.lastName || '',
          gender: result.data.gender || '',
          maritalStatus: result.data.maritalStatus || '',
          dateOfBirth: result.data.dateOfBirth ? new Date(result.data.dateOfBirth).toISOString().split('T')[0] : '',
          timeOfBirth: result.data.timeOfBirth ? new Date(result.data.timeOfBirth).toISOString() : '',
          phoneNumber: result.data.phoneNumber || '',
          profilePic: result.data.profilePic || '',
          address: {
            city: result.data.address?.city || '',
            pinCode: result.data.address?.pinCode || '',
            location: result.data.address?.location || '',
            State: result.data.address?.State || ''
          }
        });
      }
    } catch (err) {
      setError('Failed to load profile data');
      console.error('Error fetching profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Updating your profile...');
    
    try {
      const formattedData = {
        ...formData,
        dateOfBirth: formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString() : null,
        timeOfBirth: formData.timeOfBirth ? new Date(formData.timeOfBirth).toISOString() : null,
        address: {
          ...formData.address,
          pinCode: formData.address.pinCode ? parseInt(formData.address.pinCode) : null
        }
      };

      const token = localStorage.getItem('token');
      const response = await fetch('https://atro-server.onrender.com/api/users/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData)
      });

      if (!response.ok) throw new Error('Failed to update profile');
      
      toast.success('Profile updated successfully!', {
        id: loadingToast,
        duration: 3000,
      });
    } catch (err) {
      toast.error('Failed to update profile. Please try again.', {
        id: loadingToast,
        duration: 4000,
      });
      console.error('Error updating profile:', err);
    }
  };

  if (isLoading) return <AstroLoader title="Loading your profile..." />;
  if (error) return <ErrorState message={error} retry={fetchUserProfile} />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <Toaster position="top-right" />
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-red-500 px-6 py-8">
            <h2 className="text-3xl font-bold text-center text-white">Profile Settings</h2>
            <p className="text-center text-white/80 mt-2">Manage your account information</p>
          </div>

          {/* Profile Picture */}
          {/* <div className="relative  mb-6 flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                <img 
                  src={formData.profilePic || "/default-avatar.png"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                type="button"
                className="absolute bottom-2 right-2 p-2 bg-gradient-to-r from-amber-500 to-red-500 rounded-full text-white shadow-lg hover:from-amber-600 hover:to-red-600 transition-all duration-300"
              >
                <Camera size={18} />
              </button>
            </div>
          </div> */}

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      disabled
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">Select Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time of Birth</label>
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div> */}
                </div>
              </div>

              {/* Address Information Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Address Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      name="address.State"
                      value={formData.address.State}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                    <input
                      type="text"
                      name="address.pinCode"
                      value={formData.address.pinCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      name="address.location"
                      value={formData.address.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-red-500 
                    text-white rounded-lg hover:from-amber-600 hover:to-red-600 
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                    transition-all duration-300 shadow-md hover:shadow-lg
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Saving Changes...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="h-1 w-12 bg-amber-500 rounded-full opacity-50"></div>
          <div className="h-1 w-20 bg-red-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;