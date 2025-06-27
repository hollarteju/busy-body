import { 
  Star, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { axiosEstore } from '@/package/eStoreAxios';


export default function Review({id}){

const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
const [comments, setComments] = useState({})

 const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 4) % comments.length);
  };

  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 4 + comments.length) % comments.length);
  };

  const reviewHandler = async ()=>{
    try{
      const response = await axiosEstore.get(`https://estores.ng/api/seller-comment.php?id=${id}`)
      if(response.status == 200){
        const data = await response.data;
        setComments(data)
      }
    }catch(error){
      console.error(error);
    }
  };

  useEffect(()=>{
    reviewHandler()
  },[])


    return(
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold">Reviews</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {comments?.comments?.map((review, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 h-44">
                      <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                        {review?.sender_initial}
                      </div>
                      <div className="min-w-0 flex-1">
                          <span className="font-medium text-gray-900 text-sm">{review.sender_name}</span>
                      </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                  </div>
                  ))}
              </div>
            </div>
        </div>
    )
}