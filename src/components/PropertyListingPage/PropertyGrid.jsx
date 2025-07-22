import React from 'react';
import images from '../assets/images';

const PropertyGrid = ({ properties }) => {
  return (
    <div id="PropertyGrid_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div
          key={property.id}
          id={`PropertyGrid_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={images[index % images.length] || 'https://via.placeholder.com/300x200'}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-green-600 font-bold mb-3">${property.price.toLocaleString()}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{property.bedrooms} beds</span>
              <span>{property.bathrooms} baths</span>
              <span>{property.area} sq ft</span>
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => window.location.href = `/property/${property.id}`}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;