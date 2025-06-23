import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Share, ShoppingCart, Heart, Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import big from "../assets/images/big-nivea.png";
import left from "../assets/images/left-nivea.png";
import right from "../assets/images/right-nivea.png";
import center from "../assets/images/center-nivea.png";
import userPics from "../assets/images/product-user.jpg";
import SimilarProducts from '@/components/similarProducts';
import OpenHour from '@/components/openingHour';
import Review from '@/components/productReview';

// Product Listing Component
const ProductListing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    left,
    center, 
    right
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen ">
      {/* Navigation Breadcrumb */}
      <nav className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 space-x-6 text-sm">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer border rounded-3xl py-2 px-6">All Products</span>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer border rounded-3xl py-2 px-6">Electronics</span>
            <span className="text-blue-600 font-medium border rounded-3xl py-2 px-6">Freezer</span>
          </div>
        </div>
      </nav>

      
      {/* <ToggleBtn setCurrentView={setCurrentView} currentView={currentView}/> */}

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Main Product Section */}
          <div className="lg:col-span-2">
            {/* Product Image */}
            <div className="bg-white rounded-lg p-6 mb-6  ">
              <div className="relative bg-white rounded-lg overflow-hidden">
                {/* Main NIVEA Soft Product Image */}
                <div className="aspect-auto flex items-center justify-center px-8">
                  <div className="relative w-full max-w-md">
                    <img src={big} alt="" className="w-full h-96 object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="mt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      # 50,000
                    </h1>
                    <p className="text-gray-600 text-sm mb-2">5,345 views</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Share className="w-5 h-5" />
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      Report Abuse
                    </button>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Posted: 28/10/2023</p>
                  <p>Ends: 28/11/2023</p>
                  <p>Location: Ikeja street</p>
                  <p>Distance: 11 Km</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {`Lorem ipsum dolor sit amet consectetur. Nec euismod nisl nisl sit laoreet. Metus aliquam maecenas rhoncus vulputate sed scelerisque proin faucibus. Penatibus facilisis et egestas egestas a cursus lectus dui. Enim in amet arcu urna mi. Placerat suspendisse vitae aliquam sed amet vitae condimentum ipsum. Tristique id mollis donec. Lorem ipsum dolor sit amet consectetur. Nec euismod nisl nisl sit laoreet. Metus aliquam maecenas rhoncus vulputate sed scelerisque proin faucibus. Penatibus facilisis et egestas a cursus lectus dui. Enim in amet arcu urna mi. Placerat suspendisse vitae aliquam sed amet vitae condimentum ipsum. Tristique id mollis donec.` .slice(0, 300)}...
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-24">
            <div className='flex flex-col gap-12'>
                {/* Seller Info */}
                <div className="bg-white rounded-lg shadow-sm py-6 px-12">
                <div className="flex gap-8 items-center mb-4">
                    <div className="w-48 h-24 rounded-lg flex items-center justify-center">
                    <img src={userPics} alt="" className='w-full object-cover h-full' />
                    </div>
                    <div className='w-full'>
                    <h3 className="font-semibold text-lg">Beauty Place</h3>
                    <div className="flex items-center w-full">
                        <div className="relative w-full h-2 border rounded-lg overflow-hidden">
                            <div className="w-3/4 h-full bg-green-500"/>
                        </div>
                    </div>
                    </div>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-colors">
                    Request a call
                </button>
                
                <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>08047282542</span>
                    </div>
                    <div className="flex items-center text-gray-600">  
                    <Mail className="w-4 h-4 mr-3" />
                    <span>Beautyhome@gmail.com</span>
                    </div>
                </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                order
                </button>
            </div>
            <div className="flex space-x-3">
              {productImages.map((products,index) => (
                <div 
                  key={index}
                  className={`w-24 h-24 bg-white rounded-lg shadow-sm cursor-pointer border-2 flex-shrink-0 overflow-hidden ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={products} alt="" className='w-full h-full object-cover' />
                  </div>
                </div>
              ))}
              {/* Navigation Arrow */}
              <button 
                onClick={nextImage}
                className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </button>
            </div>

          </div>
          
        </div>
      </div>
      <StoreDetails/>
    </div>
  );
};

// Store Details Component  
const StoreDetails = () => {
  
 

  
 

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Store Address</h2>
            <div className="bg-[#F9F8F8] rounded-lg shadow-sm p-12">
              <OpenHour/>
            </div>
            <Review/>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProductReview = () => {

  return (
    <div className="min-h-screen">
      <ProductListing/>
      <SimilarProducts/>
    </div>
  );
};

export default ProductReview;