import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedProperties from './FeaturedProperties';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';
import images from '../assets/images';

const Body = () => {
  const { properties, searchProperties, loading } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-white">
      <Hero onSearch={searchProperties} />
      <AboutUs />
      <FeaturedProperties properties={properties} loading={loading} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;