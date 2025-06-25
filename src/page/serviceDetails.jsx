import  { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Share2, CheckCircle, Home, Car, Search, Eye, Shield, Clock, Link, FileText, MessageSquare } from 'lucide-react';
import OpenHour from '@/components/openingHour';
import Review from '@/components/productReview';
import StoreAdsBanner from '@/components/storeAds';
import ServiceCard from '@/components/serviceCard';

const ServiceDetails = () => {
  const selectedService = JSON.parse(localStorage.getItem("service-details"));
  const [selectedImage, setSelectedImage] = useState(0);

  const profileImages = [
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop"
  ];

  const services = [
    { icon: Shield, title: "Extended Warranties", description: "Comprehensive coverage for all services" },
    { icon: Home, title: "Home delivery", description: "We come to your location" },
    { icon: Car, title: "Car Buying", description: "Mobile makeup services" },
    { icon: Search, title: "Car Sourcing", description: "Find the perfect look" },
    { icon: Eye, title: "Live Video Viewing", description: "Virtual consultation available" },
    { icon: Shield, title: "Extended warranties", description: "Quality guarantee on all work" },
    { icon: Clock, title: "Click and Collect", description: "Quick appointment booking" }
  ];

    const Makeups = [
  {
    id: 1,
    name: "Valton kiz",
    specialization: "Specialized in Bridal Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 2,
    name: "Spiddy val",
    specialization: "Specialized in Editorial Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 3,
    name: "Octaze zali",
    specialization: "Specialized in Glam Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 4,
    name: "Tallest G",
    specialization: "Specialized in Natural Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 5,
    name: "Divine Styles",
    specialization: "Specialized in Party Makeup",
    location: "Ikeja Lagos",
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 6,
    name: "Royal Touch",
    specialization: "Specialized in Special Effects Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop&crop=face",
    verified: true
  }
];


  const handleShare = () => {
    console.log('Share profile');
  };

  const handleConnect = () => {
    console.log('Connect with artist');
  };

  const handleSendMessage = () => {
    console.log('Send message to artist');
  };

  return (
    <div className="max-w-screen-xl space-y-24 mx-auto px-4 py-12 bg-white">
        <div>
            {/* <nav className="py-8">
                <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center h-16 space-x-6 text-sm font-semibold">
                    <span className="text-gray-600 hover:[#FF0303] cursor-pointer border rounded-3xl py-2 px-6">Service Provider</span>
                    <span className="text-gray-600 hover:[#FF0303] cursor-pointer border rounded-3xl py-2 px-6">Auto Service Provider</span>
                    <span className="text-[#FF0303]-medium border rounded-3xl py-2 px-6">Service Providers Details</span>
                </div>
                </div>
            </nav> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Profile Image */}
                <div className="relative">
                <img
                    src={`https://efixit.ng/api/${selectedService?.image}`}
                    alt="Valton kiz makeup artist"
                    className="w-full h-80 lg:h-96 object-cover rounded-lg"
                />
                </div>

                {/* Profile Information */}
                <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedService?.name}</h1>
                    <p className="text-lg text-gray-600 mb-4">{selectedService?.speciality}</p>
                    
                    <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-3" />
                        <span>{selectedService?.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 mr-3" />
                        <span>{selectedService?.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-3" />
                        <span>{selectedService?.phone_number1} {selectedService?.phone_number1}</span>
                    </div>
                    </div>
                </div>

                {/* Experience Badge */}
                <div className="inline-block">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border">
                    Experience
                    </span>
                    <span className="ml-2 text-gray-600">Over 12 year</span>
                </div>

                {/* Bio */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bio</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedService?.bio}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row sm:flex-col sm:gap-4 gap-3">
                    <div className='flex items-center justify-between'>
                      <button
                      onClick={handleShare}
                      className="w-full sm:w-1/3 flex items-center text-xl font-semibold"
                      >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                      </button>
                      <div className='flex items-center gap-4'>
                        <div className='py-1 px-3 bg-slate-100 flex items-center gap-2 rounded-xl'>
                          <Eye size={15}/>
                          <small>{selectedService?.views}</small>
                        </div>
                        {/* <div className='py-1 px-3 bg-slate-100 flex items-center gap-2 rounded-xl'>
                          <Link size={15}/>
                          <small>19</small>
                        </div> */}
                        <div className='py-1 px-3 bg-slate-100 flex items-center gap-2 rounded-xl'>
                          <MessageSquare size={15}/>
                          <small>25</small>
                        </div>
                        <div className='py-1 px-3 bg-slate-100 flex items-center gap-2 rounded-xl'>
                          <FileText size={15}/>
                          <small>11</small>
                        </div>
                      </div>
                    </div>
                    <div className='sm:w-2/3 w-full flex flex-col sm:flex-row gap-3'>
                        <button
                        onClick={handleConnect}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
                        >
                        Connect
                        </button>
                        <button
                        onClick={handleSendMessage}
                        className="flex-1 bg-white border border-red-500 text-red-500 hover:bg-red-50 font-semibold px-6 py-4 rounded-lg transition-colors"
                        >
                        Send a Message
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      {/* Gallery Section */}
      <div className="mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {profileImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">4+</div>
                    <div className="text-sm">Photos</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className=" mr-2">Our Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='relative max-w-screen-xl rounded-xl px-4 shadow-xl mt-12 border'>
            <select className='w-full font-semibold text-xl p-4 outline-none' name="" id="">
                <option value="">Work History</option>
            </select>
        </div>
        <div className='max-w-screen-xl mt-16 bg-[#F9F8F8] p-12'>
            <OpenHour/>
        </div>
        <Review/>
        <StoreAdsBanner/>
        <ServiceCard header="Other Service Providers Near You" data={Makeups}/>
      </div>
    </div>
  );
};

export default ServiceDetails;