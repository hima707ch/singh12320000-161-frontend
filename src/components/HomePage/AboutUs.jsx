import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-gray-50">
      <div id="AboutUs_2" className="container mx-auto px-6">
        <div id="AboutUs_3" className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div id="AboutUs_4" className="space-y-8">
            <div id="AboutUs_5">
              <h2 id="AboutUs_6" className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                About Us
              </h2>
              <h3 id="AboutUs_7" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Real Estate Partner
              </h3>
              <p id="AboutUs_8" className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in the real estate market, we've helped thousands of families find their perfect home. Our commitment to excellence and personalized service sets us apart.
              </p>
              <p id="AboutUs_9" className="text-lg text-gray-600 leading-relaxed">
                We believe that finding a home should be an exciting journey, not a stressful experience. That's why we provide comprehensive support from search to settlement.
              </p>
            </div>
            
            <div id="AboutUs_10" className="grid grid-cols-3 gap-8">
              <div id="AboutUs_11" className="text-center">
                <div id="AboutUs_12" className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div id="AboutUs_13" className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div id="AboutUs_14" className="text-center">
                <div id="AboutUs_15" className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div id="AboutUs_16" className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div id="AboutUs_17" className="text-center">
                <div id="AboutUs_18" className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div id="AboutUs_19" className="text-sm text-gray-600">Properties Sold</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div id="AboutUs_20" className="relative">
            <div id="AboutUs_21" className="relative">
              <img
                id="AboutUs_22"
                src={images[1] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt="Modern Office"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div id="AboutUs_23" className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border">
                <div id="AboutUs_24" className="flex items-center space-x-4">
                  <div id="AboutUs_25" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg id="AboutUs_26" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div id="AboutUs_27">
                    <p id="AboutUs_28" className="font-semibold text-gray-900">Certified Agents</p>
                    <p id="AboutUs_29" className="text-sm text-gray-600">Licensed Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;