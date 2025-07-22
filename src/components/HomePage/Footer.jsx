import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white">
      <div id="Footer_2" className="container mx-auto px-6 py-16">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div id="Footer_4" className="space-y-4">
            <h3 id="Footer_5" className="text-2xl font-bold mb-4">DreamHome Realty</h3>
            <p id="Footer_6" className="text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect home. We make real estate simple, transparent, and rewarding.
            </p>
            <div id="Footer_7" className="flex space-x-4">
              <a id="Footer_8" href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg id="Footer_9" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a id="Footer_10" href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg id="Footer_11" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a id="Footer_12" href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg id="Footer_13" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a id="Footer_14" href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg id="Footer_15" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.703-2.16 5.132-.61.691-1.377 1.304-2.316 1.773-.942.472-2.01.77-3.092.77-1.696 0-3.248-.543-4.52-1.463-.243-.176-.166-.538.118-.466.974.246 2.01.325 3.072.222 1.606-.156 3.174-.652 4.457-1.566.243-.173.538-.02.47.243-.246.891-.73 1.718-1.39 2.41-.243.257-.608.027-.518-.257.17-.542.225-1.114.169-1.688-.027-.257-.27-.369-.462-.222-.896.685-1.952 1.134-3.072 1.285-.257.035-.462-.222-.35-.462.246-.532.648-1.01 1.133-1.371.243-.18.118-.538-.169-.465-.891.227-1.836.246-2.758.055-.257-.053-.35-.35-.169-.515.65-.588 1.463-1.01 2.353-1.214.257-.06.35-.35.169-.515-.65-.588-1.463-1.01-2.353-1.214-.257-.06-.35-.35-.169-.515.65-.588 1.463-1.01 2.353-1.214.257-.06.35-.35.169-.515-.65-.588-1.463-1.01-2.353-1.214-.257-.06-.35-.35-.169-.515.65-.588 1.463-1.01 2.353-1.214.257-.06.35-.35.169-.515-.65-.588-1.463-1.01-2.353-1.214-.257-.06-.35-.35-.169-.515.891-.801 2.055-1.285 3.328-1.285 2.727 0 4.937 2.211 4.937 4.937 0 .365-.04.717-.118 1.058z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div id="Footer_16" className="space-y-4">
            <h4 id="Footer_17" className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul id="Footer_18" className="space-y-2">
              <li id="Footer_19"><a href="#" className="text-gray-300 hover:text-white transition-colors">Buy Properties</a></li>
              <li id="Footer_20"><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell Properties</a></li>
              <li id="Footer_21"><a href="#" className="text-gray-300 hover:text-white transition-colors">Rent Properties</a></li>
              <li id="Footer_22"><a href="#" className="text-gray-300 hover:text-white transition-colors">Property Management</a></li>
              <li id="Footer_23"><a href="#" className="text-gray-300 hover:text-white transition-colors">Investment Advisory</a></li>
            </ul>
          </div>

          {/* Services */}
          <div id="Footer_24" className="space-y-4">
            <h4 id="Footer_25" className="text-lg font-semibold mb-4">Services</h4>
            <ul id="Footer_26" className="space-y-2">
              <li id="Footer_27"><a href="#" className="text-gray-300 hover:text-white transition-colors">Property Valuation</a></li>
              <li id="Footer_28"><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Analysis</a></li>
              <li id="Footer_29"><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Staging</a></li>
              <li id="Footer_30"><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Assistance</a></li>
              <li id="Footer_31"><a href="#" className="text-gray-300 hover:text-white transition-colors">Financing Help</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="Footer_32" className="space-y-4">
            <h4 id="Footer_33" className="text-lg font-semibold mb-4">Contact Us</h4>
            <div id="Footer_34" className="space-y-3">
              <div id="Footer_35" className="flex items-center space-x-3">
                <svg id="Footer_36" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span id="Footer_37" className="text-gray-300">123 Real Estate Ave, City, ST 12345</span>
              </div>
              <div id="Footer_38" className="flex items-center space-x-3">
                <svg id="Footer_39" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span id="Footer_40" className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div id="Footer_41" className="flex items-center space-x-3">
                <svg id="Footer_42" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span id="Footer_43" className="text-gray-300">info@dreamhomerealty.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr id="Footer_44" className="my-8 border-gray-700" />
        
        <div id="Footer_45" className="flex flex-col md:flex-row justify-between items-center">
          <p id="Footer_46" className="text-gray-400 text-sm">
            © 2024 DreamHome Realty. All rights reserved.
          </p>
          <div id="Footer_47" className="flex space-x-6 mt-4 md:mt-0">
            <a id="Footer_48" href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a id="Footer_49" href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a id="Footer_50" href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;