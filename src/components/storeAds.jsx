import React from 'react';

const StoreAdsBanner = () => {
  const handleSeeStores = () => {
    // Handle navigation to stores page
    console.log('See Stores clicked');
  };

  return (
    <div className="w-full bg-gradient-to-r from-red-800 to-red-600 py-12 px-4 mt-12 rounded-xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          See Stores
        </h2>
        
        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl mb-8 opacity-90">
          Buy your building materials from stores around you!
        </p>
        
        {/* CTA Button */}
        <button
          onClick={handleSeeStores}
          className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 hover:text-red-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          See Stores
        </button>
      </div>
    </div>
  );
};

export default StoreAdsBanner;