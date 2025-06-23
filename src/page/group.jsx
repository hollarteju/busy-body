import SectionHero from "@/components/sectionHero";
import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import group_img from "../assets/images/group.jpg";
import comment_img from "../assets/images/comment_img.jpg";


export default function Groups(){

    const toggleBtn = [
        "Post",
        "Anonymous Post",
        "Members"
    ]
    return(
        <div>
            <SectionHero header={"About Group"} bg={"group_bg"}/>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex justify-end py-4">
                    <button className="py-4 px-40 bg-[#FF0303] text-white">Join</button>
                </div>
                <div className="flex items-center">
                    {toggleBtn.map((btn, index)=>(
                    <button key={index} className="px-8 py-2 border-r-2 font-semibold">{btn}</button>
                    ))}
                </div>
                <SocialFeed/>
            </div>
        </div>
    )
}


function SocialFeed() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Joy Thompson',
      time: '5:30 pm',
      role: 'Real Estate Agent',
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt elit mattis mauris Sagittis at quam nunc sit purus. Elit sed aenean eu aliquam pulvinar cursus tempus faucibus cursus. In facilisis ut tincidunt porttitor. Sed et feugiat pulvinar arcu suspendisse faucibus varius at ut. Ut vestibulum potenti dolor erat feugiat convallis morbi egestas sed. Pharetra nulla dui dis es.',
      likes: 0,
      comments: [],
      shares: 0,
      views: '39,145 Views'
    }
  ]);

  const [comments, setComments] = useState({
    1: [
      {
        id: 1,
        author: 'Joy Thompson',
        time: '6:30 pm',
        content: 'Lorem ipsum dolor sit amet consectetur. Fringilla nibh massa mauris sagittis purus amet. Tortor sit vulputate sed ut felis.',
        likes: 0,
        views: '39,145 Views'
      }
    ]
  });

  const groups = [
    {
      id: 1,
      name: 'IT news',
      members: 1,
      postsToday: 0,
      image: group_img
    },
    {
      id: 2,
      name: 'Tech group',
      members: 1,
      postsToday: 0,
      image: group_img
    }
  ];

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'Anonymous User',
        time: 'now',
        role: '',
        content: newPost,
        likes: 0,
        comments: [],
        shares: 0,
        views: '0 Views'
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const PostCard = ({ post, isComment = false }) => (
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
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Feed */}
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

            {/* Posts */}
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About Group */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Group</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur. Nec euismod nisl nisl sit laoreet. Metus aliquam maecenas rhoncus vulputate sed scelerisque proin faucibus. Penatibus facilisis et egestas egestas a cursus lectus dui. Enim in amet amet urna mi. Placerat suspendisse vitae aliquam sed amet vitae condimentum ipsum. Tristique id mollis donec sit. Odio sit pulvinar molestie consectetur mus quis morbi. Dis eu nam enim suscipit massa aliquam at dictum purus laoreet magna. Enim massa suspendisse.
              </p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded font-medium transition-colors">
                Share Group
              </button>
            </div>

            {/* Other Groups */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Other Groups</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...groups, ...groups].map((group, index) => (
                  <div key={`${group.id}-${index}`} className="border rounded-lg overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-900 mb-1">{group.name}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{group.members} Member</span>
                        <span>{group.postsToday} Posts today</span>
                      </div>
                      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-medium transition-colors">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}