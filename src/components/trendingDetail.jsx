import { ThumbsDown, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrendingDetail(){

    const detail =   JSON.parse(localStorage.getItem("news-details") || {});

    return(
        <div className="relative w-screen mt-24">
            <div className="max-w-6xl mx-auto bg-white py-12">
                <div className="bg-white rounded-lg  overflow-hidden sm:px-4 px-2">
                    <div className='grid grid-cols-2 gap-8 relative h-screen'>
                        <div className='flex flex-col gap-12'>
                            <img src={detail?.featured_image} alt="News" className="w-full h-96 object-cover" />
                            <div className="flex items-center gap-4">
                                <a 
                                href={`https://essentialnews.ng/post/${detail?.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                 className="flex gap-2 items-center bg-gray-100 text-black rounded-xl px-4 py-2 cursor-pointer">
                                    <small>Like</small>
                                    <Heart size={20}/>
                                </a>
                                <a 
                                href={`https://essentialnews.ng/post/${detail?.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                 className="flex gap-2 items-center bg-gray-100 text-black rounded-xl px-4 py-2 cursor-pointer">
                                    <small>Dislike</small>
                                    <ThumbsDown size={20}/>
                                </a>
                                <a 
                                href={`https://essentialnews.ng/post/${detail?.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                 className="flex gap-2 items-center bg-gray-100 text-black rounded-xl px-4 py-2 cursor-pointer">
                                    <small>Share</small>
                                    <Share2 size={20}/>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 py-2 h-5/6 overflow-y-scroll">
                            <h4 className="font-bold text-gray-900 mb-2">{detail?.title}</h4>
                            <div className="text-gray-600 text-sm leading-relaxed"  
                            dangerouslySetInnerHTML={{ __html: detail?.content || '' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}