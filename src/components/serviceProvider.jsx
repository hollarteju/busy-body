import recommended from "../assets/images/recommended.jpg";
import ServiceLinks from "./serviceLink";
import { Link } from "react-router-dom";


export default function ServiceProvider(){
   
    return(
        <>
          <ServiceLinks/>
          {/* <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Highly recommended</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Link to="/service-provider" key={item} className="bg-white flex items-center justify-between h-48 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={recommended} alt="Hair styling" className="w-1/2 h-full object-cover" />
                  <div className="px-3">
                    <h4 className="font-semibold text-gray-900">Nomase Jess</h4>
                    <p className="text-sm text-gray-600">5 years Experience</p>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}
        </>
    )
}