import { Phone, Mail, MapPin, Clock, Star, Share, ShoppingCart, Heart, Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Review(){

const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

 const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 4) % reviews.length);
  };

  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 4 + reviews.length) % reviews.length);
  };
    const reviews = [
        {
          name: 'Blessing Lainus',
          rating: 5,
          text: 'Lorem ipsum dolor sit amet consectetur. Tellus scelerisque donec elementum donec leo integer adipiscing nunc. Commodo consectetur'
        },
        {
          name: 'Blessing Lainus', 
          rating: 5,
          text: 'Lorem ipsum dolor sit amet consectetur. Tellus scelerisque donec elementum donec leo integer adipiscing nunc. Commodo consectetur'
        },
        {
          name: 'Blessing Lainus',
          rating: 5, 
          text: 'Lorem ipsum dolor sit amet consectetur. Tellus scelerisque donec elementum donec leo integer adipiscing nunc. Commodo consectetur'
        },
        {
          name: 'Blessing Lainus',
          rating: 5,
          text: 'Lorem ipsum dolor sit amet consectetur. Tellus scelerisque donec elementum donec leo integer adipiscing nunc. Commodo consectetur'
        }
      ];
    

    return(
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold">Reviews</h3>
            </div>
            
            <div className="p-6">
            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {reviews.slice(currentReviewIndex, currentReviewIndex + 4).map((review, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                        B
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="font-medium text-gray-900 text-sm">{review.name}</span>
                    </div>
                    </div>
                    <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-6">
                {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index * 4)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentReviewIndex / 4) === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                />
                ))}
                <button 
                onClick={nextReviews}
                className="ml-4 p-1 text-gray-400 hover:text-gray-600"
                >
                <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            <button className="xl:w-1/4 1/2 border border-[#59AEFF] hover:bg-blue-600 hover:text-white text-[#59AEFF] font-medium p-4 rounded-lg transition-colors">
                Post a Comment
            </button>
            </div>
        </div>
    )
}