import { Link } from "react-router-dom";
import hair_style from "../assets/images/hair_style.png";
import makeup from "../assets/images/makeup.png";
import sewing_machine from "../assets/images/sewing_machine.png";
import spa from "../assets/images/spa.png";
import cobbler from "../assets/images/cobbler.png";

export default function ServiceLinks(){

      const serviceProviders = [
    { name: 'Hair Stylist', icon: hair_style, color: 'bg-green-100' },
    { name: 'Fashion Designer', icon: sewing_machine, color: 'bg-orange-100' },
    { name: 'Spa Treatment', icon: spa, color: 'bg-yellow-100' },
    { name: 'Cobblers', icon: cobbler, color: 'bg-blue-100' },
    { name: 'Makeup Artist', icon: makeup, color: 'bg-pink-100' },
    { name: 'Fashion Designer', icon: sewing_machine, color: 'bg-orange-100' },
  ];

    return(
        <div>
            <h2 className="text-xl font-bold text-gray-900 mb-12">Service Providers</h2>
        
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {serviceProviders.map((provider, index) => (
                    <Link key={index} to="/service-provider" className="text-center group cursor-pointer">
                    <div className={`mx-auto rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <img src={provider.icon} className="w-full h-32 object-contain" />
                    </div>
                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{provider.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}