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

export default function App() {

    const [showPopup, setShowPopup] = useState(false);
  
  return (
    <UserProvider>
      <Router>
        <NavBar setShowPopup={setShowPopup}/>
        <Routes>
          <Route path="/" element={<LandingPage showPopup={showPopup} setShowPopup={setShowPopup} />} />
          <Route path="product-review" element={<ProductReview/>}/> 
          <Route path="service-provider" element={<Services/>}/> 
          <Route path="/carts" element={<CartComponent/>}/> 
          <Route path="/service-details" element={<ServiceDetails/>}/> 
          <Route path="/product-categories" element={<CategoriesProducts/>}/>  
          <Route path="/blogs" element={<Blogs/>}/>  
          <Route path="/group" element={<Groups/>}/>
        </Routes>
        <Footer/>
      </Router>
    </UserProvider>
  );
}
