import comment_img from "../assets/images/comment_img.jpg";
import PostCard from "./postCard";

export default function Post({posts, newPost, setNewPost, handlePost, comments}){
    return(
        <div className="lg:col-span-1 space-y-6">
            {/* Post Creation */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start space-x-3">
                <div className="relative w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                    <img src={comment_img} alt="" className="object-cover h-10 w-10"  />      
                </div>
                <div className="flex-1">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write Something..."
                    className="w-full border-none resize-none focus:outline-none text-gray-700 placeholder-gray-400"
                    rows="2"
                />
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-red-500">
                    <span className="text-sm">📌 Anonymous Post</span>
                    </div>
                    <button
                    onClick={handlePost}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium transition-colors"
                    >
                    Post
                    </button>
                </div>
                </div>
            </div>
            </div>

            {posts.map((post) => (
            <div key={post.id}>
                <PostCard post={post} />
                
                {/* Comments */}
                {comments[post.id] && (
                <div className="mt-2">
                    <button className="text-sm text-gray-500 hover:text-gray-700 ml-4 mb-2">
                    View More Comment
                    </button>
                    {comments[post.id].map((comment) => (
                    <PostCard key={comment.id} post={comment} isComment={true} />
                    ))}
                    
                    {/* Add Comment */}
                    <div className="ml-4 mt-2 bg-white rounded-lg border">
                    <div className="p-3 flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <input
                        type="text"
                        placeholder="Write Something..."
                        className="flex-1 border-none focus:outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>
                    </div>
                </div>
                )}
            </div>
            ))}
        </div>
    )
}