import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties, loading }) => {
  const defaultProperties = [
    {
      id: 1,
      title: "Modern Villa in Downtown",
      price: "$850,000",
      location: "New York, NY",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      image: images[2] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Luxury Penthouse Suite",
      price: "$1,200,000",
      location: "Los Angeles, CA",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,800 sq ft",
      image: images[3] || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Cozy Family Home",
      price: "$650,000",
      location: "Austin, TX",
      bedrooms: 5,
      bathrooms: 4,
      area: "2,900 sq ft",
      image: images[4] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const displayProperties = properties && properties.length > 0 ? properties : defaultProperties;

  if (loading) {
    return (
      <section id="FeaturedProperties_1" className="py-20 bg-white">
        <div id="FeaturedProperties_2" className="container mx-auto px-6">
          <div id="FeaturedProperties_3" className="text-center mb-16">
            <h2 id="FeaturedProperties_4" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Properties
            </h2>
          </div>
          <div id="FeaturedProperties_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div id={`FeaturedProperties_${5 + item}`} key={item} className="animate-pulse">
                <div id={`FeaturedProperties_${8 + item}`} className="bg-gray-200 h-64 rounded-t-xl"></div>
                <div id={`FeaturedProperties_${11 + item}`} className="bg-white p-6 rounded-b-xl shadow-lg">
                  <div id={`FeaturedProperties_${14 + item}`} className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div id={`FeaturedProperties_${17 + item}`} className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div id={`FeaturedProperties_${20 + item}`} className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="FeaturedProperties_23" className="py-20 bg-white">
      <div id="FeaturedProperties_24" className="container mx-auto px-6">
        <div id="FeaturedProperties_25" className="text-center mb-16">
          <h2 id="FeaturedProperties_26" className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            Featured Listings
          </h2>
          <h3 id="FeaturedProperties_27" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Next Home
          </h3>
          <p id="FeaturedProperties_28" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated selection of premium properties in the most desirable locations.
          </p>
        </div>

        <div id="FeaturedProperties_29" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((property, index) => (
            <div id={`FeaturedProperties_${30 + index}`} key={property.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div id={`FeaturedProperties_${33 + index}`} className="relative overflow-hidden">
                <img
                  id={`FeaturedProperties_${36 + index}`}
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div id={`FeaturedProperties_${39 + index}`} className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <div id={`FeaturedProperties_${42 + index}`} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <svg id={`FeaturedProperties_${45 + index}`} className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              
              <div id={`FeaturedProperties_${48 + index}`} className="p-6">
                <div id={`FeaturedProperties_${51 + index}`} className="mb-4">
                  <h4 id={`FeaturedProperties_${54 + index}`} className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h4>
                  <p id={`FeaturedProperties_${57 + index}`} className="text-gray-600 flex items-center">
                    <svg id={`FeaturedProperties_${60 + index}`} className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                </div>
                
                <div id={`FeaturedProperties_${63 + index}`} className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                  <div id={`FeaturedProperties_${66 + index}`} className="flex items-center">
                    <svg id={`FeaturedProperties_${69 + index}`} className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {property.bedrooms} Beds
                  </div>
                  <div id={`FeaturedProperties_${72 + index}`} className="flex items-center">
                    <svg id={`FeaturedProperties_${75 + index}`} className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                    </svg>
                    {property.bathrooms} Baths
                  </div>
                  <div id={`FeaturedProperties_${78 + index}`} className="flex items-center">
                    <svg id={`FeaturedProperties_${81 + index}`} className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.area}
                  </div>
                </div>
                
                <div id={`FeaturedProperties_${84 + index}`} className="flex items-center justify-between">
                  <span id={`FeaturedProperties_${87 + index}`} className="text-2xl font-bold text-blue-600">
                    {property.price}
                  </span>
                  <button id={`FeaturedProperties_${90 + index}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div id="FeaturedProperties_93" className="text-center mt-12">
          <button id="FeaturedProperties_94" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;