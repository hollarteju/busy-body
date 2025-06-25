import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({header, data}) => {
  const route = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  
  const selectedService = (detail)=>{
      localStorage.setItem("service-details", JSON.stringify(detail));
      route('/service-details');
  }
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 mt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-xl font-bold text-gray-900">
          {`Popular ${header}`}
        </h1>
        <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
          View All ({data.length})
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data?.service_providers?.map((stylist) => (
          <div
          onClick={()=>selectedService(stylist)}
            key={stylist.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={`https://efixit.ng/api/${stylist.image}`}
                alt={stylist.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              {stylist.pay && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Verified
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {stylist.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {stylist.speciality}
              </p>
              <p className="text-sm font-medium text-gray-700 mb-3">
                {stylist.location}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {renderStars(stylist.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {stylist.rating} ({stylist.views})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`w-10 h-10 rounded-full font-medium transition-colors ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;