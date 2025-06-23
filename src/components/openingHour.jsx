import { Phone, Mail, MapPin, Clock, Star, Share, ShoppingCart, Heart, Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import map from "../assets/images/map.png";


export default function OpenHour(){

     const openingHours = [
    { day: 'Monday', hours: '10:00 - 15:00' },
    { day: 'Tuesday', hours: '10:00 - 15:00' },
    { day: 'Wednesday', hours: '10:00 - 15:00' },
    { day: 'Thursday', hours: '10:00 - 15:00' },
    { day: 'Friday', hours: '10:00 - 15:00' },
    { day: 'Saturday', hours: '10:00 - 15:00' }
  ];


    return(
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-36 gap-6'>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                Opening Hours
                </h3>
                <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center xl:pr-32">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                ))}
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src={map} alt="" className='w-full object-cover h-72' />
            </div>
        </div>
    )
}