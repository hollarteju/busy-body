import { Facebook, Instagram, Linkedin, Twitter} from 'lucide-react';
import { useLocation } from "react-router-dom";
import { Fragment } from 'react';

export default function Footer(){

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

    
    return(
        <Fragment>
            {path.includes(currentPath) && (
            <footer className="bg-[#F8F8F8]  py-16 mt-24 text-[#545454]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                    <h3 className="text-lg font-semibold mb-6">About</h3>
                    <p className=" leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper bibendum diam sapien faucibus. Dolor in nibh malesuada pharetra et aenean eu rhoncus. Non tortor sagittis metus vitae nunc. Varius congue faucibus lacus pharetra nisl risus.
                    </p>
                    <button className="bg-[#545454] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Learn More
                    </button>
                    </div>
                    
                    <div className='flex md:justify-end '>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms and conditions</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    </div>
                    
                    <div className='flex md:justify-end'>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Follow us</h3>
                        <div className="flex space-x-4">
                        <a href="#" className="bg-[#545454] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                            <Facebook size={30} />
                        </a>
                        <a href="#" className="bg-[#545454] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                            <Instagram size={30} />
                        </a>
                        <a href="#" className="bg-[#545454] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                            <Linkedin size={30} />
                        </a>
                        <a href="#" className="bg-[#545454] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                            <Twitter size={30} />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className=" mt-12 pt-8 text-center text-[#545454]">
                    <p>&copy; 2025 Logo. All rights reserved.</p>
                </div>
                </div>
            </footer>
             )}
        </Fragment>
    )
}