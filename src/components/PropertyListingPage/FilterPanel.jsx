import React from 'react';
import images from '../assets/images';

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div id="FilterPanel_1" className="w-full lg:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 id="FilterPanel_2" className="text-xl font-semibold mb-4">Filters</h2>
      
      <div id="FilterPanel_3" className="space-y-4">
        <div id="FilterPanel_4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            id="FilterPanel_5"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter location"
          />
        </div>

        <div id="FilterPanel_6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              id="FilterPanel_7"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-1/2 p-2 border rounded-md"
              placeholder="Min"
            />
            <input
              type="number"
              id="FilterPanel_8"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-1/2 p-2 border rounded-md"
              placeholder="Max"
            />
          </div>
        </div>

        <div id="FilterPanel_9">
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            id="FilterPanel_10"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;