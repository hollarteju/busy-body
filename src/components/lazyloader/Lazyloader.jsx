import React, { useState } from 'react'
import { IoImageOutline } from 'react-icons/io5';
import Logo from "../../assets/white.png"

const Lazyloader = ({ publicId, alt, className, style, card }) => {
    const cloudinaryBase = "https://res.cloudinary.com/dhvspn5le/image/upload";
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {card ? <img src={Logo} alt={"alt"} /> : <FallbackPulsediv />}
                </div>
            )}
            <img
                src={`${cloudinaryBase}/${publicId}?w=500&h=500&fit=crop&auto=webp`}
                alt={alt}
                className={className}
                style={style}
                loading="lazy"
                onLoad={handleLoad}
                onError={() => setIsLoading(false)}
            />
        </div>
    );
};

// Fallback Pulsediv
const FallbackPulsediv = () => {
    return (
        // <div className="bg-gray-400 rounded-md w-full h-full flex justify-center items-center">
        //     <IoImageOutline className='animate-pulse text-black/90 w-1/2 h-1/2 mx-auto' />
        // </div>
        <div className="bg-gray-200 rounded-md w-full h-full mb-2 shadow-lg">
            <div className="w-full h-32 bg-[#c0c0c0] rounded-t-2xl"></div>
            <div className="flex flex-col text-sm p-4">
                <div className="h-4 bg-[#c0c0c0] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#c0c0c0] rounded w-1/2"></div>
            </div>
        </div>

    );
}


export default Lazyloader;
