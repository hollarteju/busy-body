import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Trending(){
    const route = useNavigate();
    const [trendingData, setTrendingData] = useState([]);
    
    const TrendingHandler =async ()=>{
        try{
            const response = await axios.get("https://backend.essentialnews.ng/api/posts/wedding?per_page=3&sort_order=desc");
            if(response.status == 200){
            const data = response.data.data;
            setTrendingData(data.posts);
        };
        }catch(error){
            console.log(error)
        }
    };

    const selectedNews = (detail) => {
        localStorage.setItem("news-details", JSON.stringify(detail));
        route("/trending-detail");
    };


    useEffect(()=>{
        TrendingHandler()
    },[]);


    return(
        <div className="mt-16">
            <div className="flex items-center justify-between ">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Trending News</h3>
            <a
            href="https://essentialnews.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 font-semibold"
            >
                See more
            </a>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {trendingData.map((trending, index) => {
                const content = trending?.content
                ?.replace(/<[^>]+>/g, '')       
                ?.split(/\s+/)                 
                ?.slice(0, 15)                  
                ?.join(' ') + '...';
                
                const title = trending?.title?.split(" ").slice(0, 5).join(" ") + "...";
              
                return (
                <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg cursor-pointer sm:px-4 px-2" onClick={()=>selectedNews(trending)}>
                    <div className='flex items-center gap-8'>
                        <img src={trending?.featured_image} alt="News" className="w-1/2 h-20 object-cover" />
                        <div className="flex flex-col py-2">
                            <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                            <small className="text-gray-600 text-sm leading-relaxed">
                                {content} 
                            </small>
                        </div>
                    </div>
                </div>
              )})}
            </div>
        </div>
    )
}