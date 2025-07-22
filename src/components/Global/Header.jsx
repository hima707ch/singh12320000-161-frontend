import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50" id="Header_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="Header_2">
        <div className="flex justify-between items-center h-16" id="Header_3">
          {/* Logo */}
          <div className="flex-shrink-0" id="Header_4">
            <Link to="/" className="flex items-center">
              <img
                className="h-12 w-auto"
                src={images[0]}
                alt="Logo"
                id="Header_5"
              />
              <span className="text-white text-xl font-bold ml-2" id="Header_6">PropertyHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" id="Header_7">
            <Link
              to="/"
              className={`${location.pathname === '/' ? 'text-white border-b-2 border-white' : 'text-blue-100 hover:text-white'} px-3 py-2 text-sm font-medium transition duration-150 ease-in-out`}
              id="Header_8"
            >
              Home
            </Link>
            <Link
              to="/propertylistingpage"
              className={`${location.pathname === '/propertylistingpage' ? 'text-white border-b-2 border-white' : 'text-blue-100 hover:text-white'} px-3 py-2 text-sm font-medium transition duration-150 ease-in-out`}
              id="Header_9"
            >
              Properties
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block" id="Header_10">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search properties..."
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="Header_11"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition duration-150 ease-in-out"
                id="Header_12"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" id="Header_13">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
              id="Header_14"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="Header_15"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="Header_16">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" id="Header_17">
              <Link
                to="/"
                className={`${location.pathname === '/' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
                id="Header_18"
              >
                Home
              </Link>
              <Link
                to="/propertylistingpage"
                className={`${location.pathname === '/propertylistingpage' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
                id="Header_19"
              >
                Properties
              </Link>
              <form onSubmit={handleSearch} className="mt-4" id="Header_20">
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="Header_21"
                />
                <button
                  type="submit"
                  className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-150 ease-in-out"
                  id="Header_22"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;