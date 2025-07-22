import React, { useState } from 'react';
import images from '../assets/images';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    propertyId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '', propertyId: '' });
      } else {
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="CallToAction_1" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div id="CallToAction_2" className="absolute inset-0 opacity-10">
        <div id="CallToAction_3" className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full"></div>
        <div id="CallToAction_4" className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full"></div>
        <div id="CallToAction_5" className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div id="CallToAction_6" className="container mx-auto px-6 relative z-10">
        <div id="CallToAction_7" className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div id="CallToAction_8" className="text-white space-y-8">
            <div id="CallToAction_9">
              <h2 id="CallToAction_10" className="text-4xl lg:text-6xl font-bold mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p id="CallToAction_11" className="text-xl lg:text-2xl text-blue-100 mb-8">
                Let our expert team guide you through every step of your real estate journey. From search to settlement, we're here to help.
              </p>
            </div>
            
            <div id="CallToAction_12" className="space-y-6">
              <div id="CallToAction_13" className="flex items-center space-x-4">
                <div id="CallToAction_14" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg id="CallToAction_15" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span id="CallToAction_16" className="text-lg">Expert Real Estate Consultation</span>
              </div>
              <div id="CallToAction_17" className="flex items-center space-x-4">
                <div id="CallToAction_18" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg id="CallToAction_19" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span id="CallToAction_20" className="text-lg">Personalized Property Matching</span>
              </div>
              <div id="CallToAction_21" className="flex items-center space-x-4">
                <div id="CallToAction_22" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg id="CallToAction_23" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span id="CallToAction_24" className="text-lg">Full Support Through Closing</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div id="CallToAction_25" className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 id="CallToAction_26" className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Get Started Today
            </h3>
            
            {submitMessage && (
              <div id="CallToAction_27" className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('Thank you') 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form id="CallToAction_28" onSubmit={handleSubmit} className="space-y-6">
              <div id="CallToAction_29">
                <input
                  id="CallToAction_30"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div id="CallToAction_31">
                <input
                  id="CallToAction_32"
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div id="CallToAction_33">
                <input
                  id="CallToAction_34"
                  type="text"
                  name="propertyId"
                  placeholder="Property ID (Optional)"
                  value={formData.propertyId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div id="CallToAction_35">
                <textarea
                  id="CallToAction_36"
                  name="message"
                  placeholder="Tell us about your dream home..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button
                id="CallToAction_37"
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
              </button>
            </form>
            
            <div id="CallToAction_38" className="mt-6 text-center text-sm text-gray-600">
              <p id="CallToAction_39">🔒 Your information is secure and will never be shared</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;