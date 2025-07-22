import { useState, useEffect } from 'react';

const useHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchProperties = async (searchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams();
      
      if (searchParams.location) queryParams.append('location', searchParams.location);
      if (searchParams.minPrice) queryParams.append('minPrice', searchParams.minPrice);
      if (searchParams.maxPrice) queryParams.append('maxPrice', searchParams.maxPrice);
      if (searchParams.type && searchParams.type !== 'all') queryParams.append('type', searchParams.type);
      
      const response = await fetch(`/api/properties/search?${queryParams.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        setProperties(data);
      } else {
        setError(data.error || 'Failed to fetch properties');
        setProperties([]);
      }
    } catch (err) {
      setError('Network error occurred');
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchProperty = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/properties/${id}`);
      const data = await response.json();
      
      if (response.ok) {
        return data;
      } else {
        setError(data.error || 'Failed to fetch property');
        return null;
      }
    } catch (err) {
      setError('Network error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const sendContactMessage = async (contactData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, message: data.message };
      } else {
        return { success: false, error: data.error || 'Failed to send message' };
      }
    } catch (err) {
      return { success: false, error: 'Network error occurred' };
    }
  };

  return {
    properties,
    loading,
    error,
    searchProperties,
    fetchProperty,
    sendContactMessage
  };
};

export default useHome;