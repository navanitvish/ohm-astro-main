import React, { useState } from 'react';
import { Send, Phone, Clock, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  const subjectOptions = [
    "General Inquiry",
    "Customer Support",
    "Service Request",
    "Feedback",
    "Other"
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold uppercase mb-6 pb-2 border-b-2 border-red-500 inline-block">
        CONTACT US
      </h1>
      
      <div className="mt-8 bg-red-50 rounded-lg p-6 shadow-md border border-red-100">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">OHM Astro</h2>
            <p className="flex items-center">
              <Phone className="mr-2 flex-shrink-0" size={18} />
              <span>Customer Support: +91-9991401666, 8930701666</span>
            </p>
        
            <p className="flex items-center">
              <Clock className="mr-2 flex-shrink-0" size={18} />
              <span>Working Hours: 10:00AM to 7:00PM (Monday to Friday)</span>
            </p>
            
            <p className="flex items-center">
              <Send className="mr-2 flex-shrink-0" size={18} />
              <a href="mailto:support@ohmastro.com" className="text-blue-600 hover:underline">
                support@OHMAstro.com
              </a>
            </p>
            
          
          </div>
          
          {/* Contact Form Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Have any questions?</h2>
            <p className="mb-6">We are happy to help. Tell us your issue and we will get back to you at the earliest.</p>
            
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* mobile number input */}

              <div>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className={`w-full p-3 border rounded ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
              </div>
              
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded appearance-none bg-white"
                >
                  <option value="" disabled>Select a subject</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows={6}
                  className={`w-full p-3 border rounded resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                <div className="text-right text-gray-500 text-sm mt-1">
                  {500 - (formData.message?.length || 0)} characters left.
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-start">
                  <div className="g-recaptcha">
                    <div className="border border-gray-300 rounded p-3 flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">I'm not a robot</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded transition-colors duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;