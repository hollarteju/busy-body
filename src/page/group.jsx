import SectionHero from "@/components/sectionHero";
import { useState } from 'react';
import group_img from "../assets/images/group.jpg";
import OtherGroup from "@/components/otherGroup";
import Post from "@/components/posts";

export default function Groups(){
    const [active, setActive] = useState("Post");
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

  const comments ={
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
  };

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


    const toggleBtn = [
        "Post",
        "Anonymous Post",
        "Members"
    ];


    return(
        <div>
            <SectionHero header={"About Group"} bg={"group_bg"}/>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex justify-end py-4">
                    <button className="py-4 px-40 bg-[#FF0303] text-white">Join</button>
                </div>
                <div className="flex items-center">
                    {toggleBtn.map((btn, index)=>(
                    <button 
                    key={index} 
                    className={`px-8 py-2 border-r-2 font-semibold ${active == btn && "bg-[#FF0303] text-white"}`}
                    onClick={()=>setActive(btn)}>
                      {btn}
                    </button>
                    ))}
                </div>
                <div className="min-h-screen">
                  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Main Feed */}
                      <div>
                        {(active == "Post" || active == "Anonymous Post") ?
                        <Post 
                        posts={posts} 
                        newPost={newPost} 
                        setNewPost={setNewPost} 
                        handlePost={handlePost} 
                        comments={comments}
                        />
                        :
                        <OtherGroup groups={groups}/>
                        }
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
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Other Groups</h2>
                        <OtherGroup groups={groups}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
};