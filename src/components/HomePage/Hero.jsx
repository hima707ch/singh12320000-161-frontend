import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Hero = ({ onSearch }) => {
  const [searchForm, setSearchForm] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: 'all'
  });
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  const handleInputChange = (e) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchForm);
  };

  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 overflow-hidden">
      {/* SVG Background Shapes */}
      <div id="Hero_2" className="absolute inset-0 opacity-20">
        <svg className="absolute top-0 left-0 w-64 h-64 text-white" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
        <svg className="absolute top-1/4 right-0 w-48 h-48 text-purple-300" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-0 left-1/4 w-56 h-56 text-blue-300" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="15" fill="currentColor" />
        </svg>
      </div>

      <div id="Hero_3" className="container mx-auto px-6 py-20 relative z-10">
        <div id="Hero_4" className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div id="Hero_5" className="text-white space-y-8">
            <h1 id="Hero_6" className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Find Your Perfect
              </span>
              <br />
              <span className={`inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent transform transition-all duration-1000 ${animateTitle ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Dream Home
              </span>
            </h1>
            <p id="Hero_7" className="text-xl lg:text-2xl text-blue-100 max-w-lg">
              Discover luxury properties in prime locations. Your journey to homeownership starts here.
            </p>
            
            {/* Search Form */}
            <form id="Hero_8" onSubmit={handleSearch} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div id="Hero_9" className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  id="Hero_10"
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={searchForm.location}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  id="Hero_11"
                  type="number"
                  name="minPrice"
                  placeholder="Min Price"
                  value={searchForm.minPrice}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  id="Hero_12"
                  type="number"
                  name="maxPrice"
                  placeholder="Max Price"
                  value={searchForm.maxPrice}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  id="Hero_13"
                  name="type"
                  value={searchForm.type}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="all">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
              <button
                id="Hero_14"
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Search Properties
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div id="Hero_15" className="relative">
            <img
              id="Hero_16"
              src={images[0] || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
              alt="Luxury Home"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div id="Hero_17" className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/30">
              <div id="Hero_18" className="text-white">
                <p id="Hero_19" className="text-2xl font-bold">500+</p>
                <p id="Hero_20" className="text-sm">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;