import { useState, useEffect } from 'react';
import { Heart, Play } from 'lucide-react';
import HeroSection from '@/components/heroSection';
import PromotionaBanner from '@/components/promotionalBanner';
import ServiceProvider from '@/components/serviceProvider';
import Products from '@/components/products';
import Trending from '@/components/trending';
import group_img from "../assets/images/group.jpg"
import yellow_car from "../assets/images/yellow_car.jpg"
import bike from "../assets/images/bike.jpg";
import black_car from "../assets/images/black_car.jpg";
import bike_alone from "../assets/images/bike_alone.jpg"
import AuthCard from '@/components/authCard';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Wrench, HelpingHand  } from 'lucide-react';
import { axiosEstore } from '@/package/eStoreAxios';

// import TrendingDetail from '@/components/trendingDetail';


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
 

  const groups = [
    { name: 'IT news', members: '1 Member', posts: '0 Posts today' },
    { name: 'Tech group', members: '1 Member', posts: '0 Posts today' },
    { name: 'Group', members: '1 Member', posts: '0 Posts today' },
    { name: 'Essential staff', members: '1 Member', posts: '0 Posts today' },
    { name: 'Health group', members: '1 Member', posts: '0 Posts today' },
  ];

  const videos = [
    { id: 1, views: '5,345 views', likes: 203, thumbnail: yellow_car },
    { id: 2, views: '5,345 views', likes: 203, thumbnail: bike },
    { id: 3, views: '5,345 views', likes: 203, thumbnail: black_car },
    { id: 4, views: '5,345 views', likes: 203, thumbnail: bike_alone },
  ];

  const services = [
    { name: 'E-Jobs', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.' },
    { name: 'E-Medicals', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.' },
    { name: 'E-Property', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.' },
    { name: 'E-Plans', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.' },
    { name: 'E-Direct', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.' },
    { name: 'Hush', desc: 'Lorem ipsum dolor sit amet consectetur. Ut turpis hac adipiscing viverra accumsan.' },
  ];

   const userTypes = [
      {
        id: 'vendor',
        title: 'Vendor',
        description: 'Sell your products and manage inventory',
        icon: ShoppingCart,
        color: 'from-blue-500 to-blue-600',
        hoverColor: 'from-blue-600 to-blue-700',
        link : "https://estores.ng/join-us.php?detail=busy-body"
      },
      // {
      //   id: 'buyer',
      //   title: 'Buyer',
      //   description: 'Browse and purchase products',
      //   icon: User,
      //   color: 'from-green-500 to-green-600',
      //   hoverColor: 'from-green-600 to-green-700',
      //   link: "https://efixit.ng/join-us.php?detail=busy-body&user=buyer"
      // },
      {
        id: 'service-provider',
        title: 'Service Provider',
        description: 'Offer services and manage bookings',
        icon: HelpingHand ,
        color: 'from-purple-500 to-purple-600',
        hoverColor: 'from-purple-600 to-purple-700',
        link: "https://efixit.ng/join-us.php?detail=busy-body"
      }
    ];


  const loginTypes = [
      {
        id: 'vendor',
        title: 'Vendor',
        description: 'Login as a vendor',
        icon: ShoppingCart,
        color: 'from-blue-500 to-blue-600',
        hoverColor: 'from-blue-600 to-blue-700',
        link : "https://estores.ng/login.php?detail=busy-body"
      },
      // {
      //   id: 'buyer',
      //   title: 'Buyer',
      //   descriptionl: 'Login as a Buyer',
      //   icon: User,
      //   color: 'from-green-500 to-green-600',
      //   hoverColor: 'from-green-600 to-green-700',
      //   link: "https://efixitl.ng/ogin.php?detail=busy-body&user=buyer"
      // },
      {
        id: 'service-provider',
        title: 'Service Provider',
        description: 'Login as a service provider',
        icon: HelpingHand ,
        color: 'from-purple-500 to-purple-600',
        hoverColor: 'from-purple-600 to-purple-700',
        link: "https://efixit.ng/login.php?detail=busy-body"
      }
    ];



  return (
    <div className="min-h-screen bg-gray-50 ">
        <HeroSection/>
        <PromotionaBanner/>
        <Products header="Products" eStore={eStore} getCarts={getCarts} setCartItems={setCartItems} cartItems={cartItems}/>
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceProvider/>
            <Trending/>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Groups you may like</h2>
            <Link to="/group" className="text-red-500 hover:text-red-600 font-semibold">See more</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {groups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={group_img} alt={group.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{group.name}</h4>
                  <p className="text-xs text-gray-500 mb-1">{group.members}</p>
                  <p className="text-xs text-gray-500 mb-3">{group.posts}</p>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* <Trending/> */}
        </div>
      </section>

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
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
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