import { useState, useEffect } from 'react';
import { Heart, Play } from 'lucide-react';
import HeroSection from '@/components/heroSection';
import PromotionaBanner from '@/components/promotionalBanner';
import Products from '@/components/products';
import Trending from '@/components/trending';
import yellow_car from "../assets/images/yellow_car.jpg"
import bike from "../assets/images/bike.jpg";
import black_car from "../assets/images/black_car.jpg";
import bike_alone from "../assets/images/bike_alone.jpg"
import {  ShoppingCart, HelpingHand  } from 'lucide-react';
import { axiosEstore } from '@/package/eStoreAxios';
import ServiceLinks from '@/components/serviceLink';
// import TrendingDetail from '@/components/trendingDetail';
import HangOut from '@/components/hangOut';
import GroupsCard from '@/components/groupCard';

const LandingPage = ({getCarts}) => {
  const [eStore, setEStore] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const eStoreProducts = async()=>{
    try{
      const response = await axiosEstore("products.php");
      if(response.status == 200){
      const data = await response.data;
      setEStore(data.products);
      }
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    eStoreProducts();
  },[])
 


  const videos = [
    { id: 1, views: '5,345 views', likes: 203, thumbnail: yellow_car },
    { id: 2, views: '5,345 views', likes: 203, thumbnail: bike },
    { id: 3, views: '5,345 views', likes: 203, thumbnail: black_car },
    { id: 4, views: '5,345 views', likes: 203, thumbnail: bike_alone },
  ];

  const services = [
    { name: 'E-Jobs', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.', link: "https://ejobs.com.ng" },
    { name: 'E-Medicals', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.', link: "https://emedicals.ng" },
    { name: 'E-Property', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.', link: "http://eproperties.ng" },
    { name: 'E-Plans', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.', link: "https://etimeplan.com" },
    { name: 'E-Direct', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.', link: "http://edirect.ng" },
    { name: 'Hush', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.', link: "#" },
  ];

   
  return (
    <div className="min-h-screen bg-gray-50 ">
        <HeroSection/>
        <PromotionaBanner/>
        <Products header="Products" eStore={eStore} getCarts={getCarts} setCartItems={setCartItems} cartItems={cartItems}/>
      <section className="py-16 bg-white">
        <div className="flex flex-col gap-24 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceLinks/>
            <Trending/>
            <HangOut/>
        </div>
      </section>
      <GroupsCard/>
      {/* Short Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-bold text-gray-900">Short Videos</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">See All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="relative bg-black rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={video.thumbnail} alt="Video" className="w-full h-96 object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="w-4 h-4" />
                    <span>{video.likes}</span>
                  </div>
                  <p className="text-xs mt-1">{video.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer" 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* {showPopup == "register" ?
        <AuthCard showPopup={showPopup} setShowPopup={setShowPopup} userTypes={userTypes} btn="Register" auth="have an account?" link="Log in" />
        :
        showPopup == "login" &&
        <AuthCard showPopup={showPopup} setShowPopup={setShowPopup} userTypes={loginTypes} btn="Login" auth="Don't have an account?" link="Register"/>
      } */}
      {/* <TrendingDetail/> */}
    </div>
  );
};

export default LandingPage;