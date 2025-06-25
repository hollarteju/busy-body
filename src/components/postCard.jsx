import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';


export default function PostCard({ post, isComment = false }){
    return(
        <div className={`bg-white rounded-lg ${isComment ? 'ml-4 mt-2' : ''} ${!isComment ? 'shadow-sm border' : 'bg-pink-50'}`}>
            <div className="p-4">
            <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                    {post.role && (
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {post.role}
                    </span>
                    )}
                </div>
                <p className="mt-2 text-gray-700">{post.content}</p>
                </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Comment</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                </button>
                </div>
                <span className="text-xs">{post.views}</span>
            </div>
            </div>
        </div>
        
    )
}