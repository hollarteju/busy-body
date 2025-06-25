import { useLocation } from "react-router-dom";
import { Fragment } from "react";


export default function DesktopMenu({navlink}){

    const location = useLocation();
    const currentPath = location.pathname;
    const path = [
        "/product-review",
        "/service-provider",
        "/carts",
        "/service-details",
        "/product-categories"
    ];

    return(
        <div className="xl:block w-[200px] absolute top-12 bg-white hidden  py-4 shadow-lg">     
            <nav className="flex flex-col space-y-2">
                {
                    navlink.map((nav, index)=>(
                        <a key={index} href={nav.redirect} className="text-gray-700 hover:text-black p-4 transition-colors hover:bg-slate-100">{nav.lable}</a>
                    ))
                }
                {/* <div className="flex flex-col space-y-4 pt-4 border-t">
                    <button className="text-left text-gray-700 hover:text-gray-900 p-4 hover:bg-slate-100">Log In</button>
                    <button className="bg-blue-600 text-white px-4 py-2 mx-4  rounded-lg hover:bg-blue-700 text-left">Sign Up</button>
                </div> */}
            </nav>
        </div>
    
  )
}