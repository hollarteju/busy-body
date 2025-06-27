import { useState, useEffect } from 'react';
import { Phone, Mail, Share, ShoppingCart, ChevronRight } from 'lucide-react';
import left from "../assets/images/left-nivea.png";
import right from "../assets/images/right-nivea.png";
import center from "../assets/images/center-nivea.png";
import userPics from "../assets/images/product-user.jpg";
import SimilarProducts from '@/components/similarProducts';
import OpenHour from '@/components/openingHour';
import Review from '@/components/productReview';
import OrderDetails from '@/components/orderDetails';
import Products from '@/components/products';
import { axiosEstore } from '@/package/eStoreAxios';
import ProductSideBar from '@/components/productSideBar';

const ProductListing = ({getCarts, cart, setCartItems}) => {

  const selectedProduct = JSON.parse(localStorage.getItem("product-details"));
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const productImages = [left, center, right];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const cartHandler = (item) => {
    const exists = cart?.some(i => i.id === item.id);
    const updatedCart = exists
      ? cart.filter(i => i.id !== item.id)
      : [...cart, item];

    localStorage.setItem("busy-body-cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); 
    getCarts()
  };

  useEffect(()=>{
    getCarts()
  },[]);


  return (
    <div className="min-h-screen ">
      {/* Navigation Breadcrumb */}
      {/* <nav className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 space-x-6 text-sm">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer border rounded-3xl py-2 px-6">All Products</span>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer border rounded-3xl py-2 px-6">Electronics</span>
            <span className="text-blue-600 font-medium border rounded-3xl py-2 px-6">Freezer</span>
          </div>
        </div>
      </nav> */}

      
      {/* <ToggleBtn setCurrentView={setCurrentView} currentView={currentView}/> */}

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 mb-6  ">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <div className="aspect-auto flex items-center justify-center px-8">
                  <div className="relative max-w-xl">
                    <img src={`https://estores.ng/${selectedProduct?.product_image}`} alt="" className="w-full h-96 object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="mt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      #{selectedProduct?.product_price}
                    </h1>
                    <p className="text-gray-600 text-sm mb-2">{selectedProduct?.product_views} views</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ShoppingCart size={20} color='#545454' fill={cart?.some(i => i.id === selectedProduct?.id) ? '#545454' : 'none'} onClick={()=>cartHandler(selectedProduct)} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Share className="w-5 h-5" />
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      Report Abuse
                    </button>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Quantity: {selectedProduct?.product_quantity}</p>
                  <p>Likes: {selectedProduct?.product_likes}</p>
                  <p>Location: {selectedProduct?.product_location}</p>
                  {/* <p>Distance: 11 Km</p> */}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Description</h3>
              <div className="text-gray-600 leading-relaxed text-sm"
              dangerouslySetInnerHTML={{ __html: selectedProduct?.product_details || '' }}
              />
              
            </div>
          </div>
          <ProductSideBar selectedProduct={selectedProduct} setIsOpen={setIsOpen} setCurrentImageIndex={setCurrentImageIndex} nextImage={nextImage} productImages={productImages} currentImageIndex ={currentImageIndex }/>
          
        </div>
      </div>
      <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Store Address</h2>
            <div className="bg-[#F9F8F8] rounded-lg shadow-sm p-12">
              <OpenHour/>
            </div>
            <Review id={selectedProduct?.id}/>
          </div>
        </div>
      </div>
    </div>
      {
        isOpen &&
        <OrderDetails setIsOpen={setIsOpen} selectedProduct={selectedProduct}/>
      }
    </div>
  );
};


const ProductReview = ({getCarts, cart, setCart}) => {
    const [cartItems, setCartItems] = useState([]);
    const [Similar, setSimilar] = useState([]);

    const similarProductHandler = async()=>{
        try{
          const response = await axiosEstore("products.php");
          if(response.status == 200){
          const data = await response.data;
          setSimilar(data.products);
          }
        }catch(error){
          console.log(error);
        }
      };

    useEffect(()=>{
    similarProductHandler();
  },[]);


  return (
    <div className="min-h-screen">
      <ProductListing getCarts={getCarts} cart={cart} setCart={setCart}  cartItems= {setCartItems}/>
      <Products header={"Similar Products"} eStore={Similar} getCarts={getCarts} setCartItems={setCartItems} />
    </div>
  );
};

export default ProductReview;