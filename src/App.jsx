import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./UserContext";
import NavBar from "./components/navBar";
import LandingPage from "./page/landingPage";
import ProductReview from "./page/productReview";
import Footer from "./components/footer";
import Services from "./page/services";
import CartComponent from "./page/cart";
import ServiceDetails from "./page/serviceDetails";
import CategoriesProducts from "./page/productDeal";
import Blogs from "./page/blogs";
import Groups from "./page/group";
import TrendingDetail from "./components/trendingDetail";

export default function App() {

    const [showPopup, setShowPopup] = useState(null);
    const [cart, setCart] = useState(null);
    
     const getCarts = ()=>{
      const items = JSON.parse(localStorage.getItem("busy-body-cart")) || [];
      setCart(items.length);
    };


  return (
    <UserProvider>
      <Router>
        <NavBar setShowPopup={setShowPopup} getCarts={getCarts} cart={cart} setCart={setCart}/>
        <Routes>
          <Route path="/" element={<LandingPage getCarts={getCarts}/>} />
          <Route path="product-review" element={<ProductReview/>}/> 
          <Route path="service-provider" element={<Services/>}/> 
          <Route path="/carts" element={<CartComponent getCarts={getCarts}/>}/> 
          <Route path="/service-details" element={<ServiceDetails/>}/> 
          <Route path="/product-categories" element={<CategoriesProducts/>}/>  
          <Route path="/blogs" element={<Blogs/>}/>  
          <Route path="/group" element={<Groups/>}/>
          <Route path="/trending-detail" element={<TrendingDetail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </UserProvider>
  );
}
