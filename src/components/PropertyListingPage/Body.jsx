import React from 'react';
import PropertyGrid from './PropertyGrid';
import FilterPanel from './FilterPanel';
import { usePropertyListing } from './usePropertyListing';
import images from '../assets/images';

const Body = () => {
  const { properties, filters, loading, error, handleFilterChange } = usePropertyListing();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Available Properties</h1>
      <div id="Body_3" className="flex flex-col lg:flex-row gap-8">
        <FilterPanel id="Body_4" filters={filters} onFilterChange={handleFilterChange} />
        <div id="Body_5" className="flex-1">
          {loading && <div id="Body_6" className="text-center py-8">Loading properties...</div>}
          {error && <div id="Body_7" className="text-red-500 text-center py-8">{error}</div>}
          {!loading && !error && <PropertyGrid properties={properties} />}
        </div>
      </div>
    </div>
  );
};

export default Body;