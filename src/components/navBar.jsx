import { Menu, X, Search, ShoppingCart, User, Heart  } from 'lucide-react';
import { Fragment, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import DesktopMenu from './desktopMenu';

export default function NavBar({setShowPopup, cart, getCarts}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    const path = [
        "/",
        "/product-review",
        "/service-provider",
        "/carts",
        "/service-details",
        "/product-categories",
        "/blogs",
        "/group",
        "/trending-detail"
    ];

    const desktopNav = [
       "/product-review",
        "/service-provider",
        "/carts",
        "/service-details",
        "/product-categories",
        "/blogs",
        "/group"
    ]

    const navlink = [
        {
        lable: "Product deals",
        redirect: "/product-categories"
        },
        {
        lable: "Service Provider",
        redirect: "/service-provider"
        },
        {
        lable: "Groups",
        redirect: "/group"
        },
        // {
        // lable: "well-being update",
        // redirect: "#"
        // },
        {
        lable: "Blogs",
        redirect: "/blogs"
        },
    ];

    useEffect(()=>{
      getCarts()
    },[])
    
    return(
        <Fragment>
        {path.includes(currentPath) && (
        <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto lg:px-4 px-4">
          <div className="flex justify-between items-center h-16">
            <div className='flex items-center gap-4'>
              {/* <Fragment>
              {desktopNav.includes(currentPath) && ( */}
              <div className='relative xl:block hidden'>
                <button 
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                {isMenuOpen &&
                <DesktopMenu navlink={navlink}/>
                }
           
              </div>
              {/* )}
              </Fragment> */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                <span className="text-xl font-bold text-gray-900">Logo</span>
              </Link>
            </div>
            <div className='w-full max-w-2xl'>
              {/* {!desktopNav.includes(currentPath) && (
              <nav className="hidden md:flex space-x-20">
                  {
                      navlink.map((nav, index)=>(
                          <a key={index} href={nav.redirect} className="text-gray-700 hover:text-black hover:font-semibold transition-colors">{nav.lable}</a>
                      ))
                  }
              </nav>
              )} */}

              {/* {desktopNav.includes(currentPath) && ( */}
              <nav className='w-full hidden md:flex items-center space-x-8'>
                <div className='w-full  flex items-center justify-between bg-[#F8F8F8] rounded-2xl px-2 overflow-hidden'>
                  <input type="text" placeholder='enter category' className='w-full outline-none bg-[#F8F8F8] py-4' />
                  <button className='flex gap-2 items-center py-2 px-4 rounded-2xl bg-[#FF0303] text-white self-right'>
                      <Search size={20}/>
                      <small>search</small>
                  </button>
                </div>
                <div className='text-right text-nowrap'>
                  <small>THink of it?Buy it here</small>
                </div>
              </nav>
              {/* )} */}
            </div>


            <div className="hidden md:flex items-center">
              <div className='flex items-center space-x-8'>
                <Heart size={20}/>
                {/* <User size={20}/> */}
                <Link to="/carts" className='relative'>
                  <div className='h-6 w-6 bg-red-600 text-white rounded-full absolute flex items-center justify-center top-[-1rem] right-[-1rem]'>
                    <small>{cart?.length}</small>
                  </div>
                  <ShoppingCart size={20} color='black'/>
                </Link>
              </div>
                 {/* <div className='flex items-center space-x-8'> */}
                   {/* <button to="https:efixit.ng/login.php" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={()=>setShowPopup("login")}>Log In</button> */}
                   {/* <button className="border-l-blue-700 border-l-2 px-4 py-2 hover:bg-blue-700 hover:text-white transition-colors" onClick={()=>setShowPopup("register")}>Sign Up</button> */}
                 {/* </div> */}
            </div>


           
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <MenuTag navlink={navlink}/>
          )}
        </div>
      </header>
        )}
    </Fragment>
    )
}

const MenuTag = ({navlink})=>{
  return(
    <div className="md:hidden py-4 border-t">     
      <nav className="flex flex-col space-y-6 px-4">
          {
            navlink.map((nav, index)=>(
                <a key={index} href={nav.redirect} className="text-gray-700 hover:text-black py-2 transition-colors">{nav.lable}</a>
            ))
        }
      </nav>
    </div>
  )
}