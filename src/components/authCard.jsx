import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';


export default function AuthCard({setShowPopup, showPopup, userTypes, btn, auth, link}) {
    const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

 



  const handleClose = () => {
    setShowPopup(false);
  };


  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      
      {/* Popup */}
      <div className="fixed top-44 z-50 bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-8 transform transition-all duration-300 animate-in fade-in zoom-in">
        {/* Close Button */}
        <button
          onClick={()=>setShowPopup(null)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Account Type</h2>
          <p className="text-gray-600">Select how you want to use our platform</p>
        </div>

        {/* User Type Cards */}
        <div className="relative w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
          {userTypes.map((type) => {
            const IconComponent = type.icon;
            const isSelected = selectedType === type.id;
            
            return (
              <div
                key={type.id}
                className={`w-full relative flex items-center justify-center group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  isSelected ? 'scale-105' : ''
                }`}
              >
                <div className={`bg-gradient-to-br w-full ${type.color} rounded-xl p-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                  isSelected ? `bg-gradient-to-br ${type.hoverColor}` : `group-hover:bg-gradient-to-br group-hover:${type.hoverColor}`
                }`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-4">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{type.description}</p>
                    
                    {/* Login Button */}
                    <Link to={type.link}>
                        <button className={`w-full py-2 px-4 text-white bg-white bg-opacity-20 rounded-lg font-medium transition-all duration-200 hover:bg-opacity-30 ${
                        isSelected ? 'bg-opacity-30' : ''
                        }`}
                        onClick={(()=>setShowPopup(false))}>
                        {btn}
                        </button>
                    </Link>
                  </div>
                </div>
                
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Loading Overlay */}
                {isSelected && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            {auth}
            <button className="text-blue-600 hover:text-blue-700 ml-1 font-medium" onClick={showPopup == "register" ? ()=>setShowPopup("login") : ()=>setShowPopup("register")}>
              {link}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}