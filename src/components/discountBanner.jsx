import { ArrowRight } from 'lucide-react';
import big from "../assets/images/big-nivea.png";

export default function DiscountBanner(){
    return(
        <div className="max-w-screen-xl py-8 px-24 bg-[#3669C9] text-white font-bold rounded-2xl">
            <div className="flex items-center justify-between">
                <div className='space-y-8'>
                    <h1 className='text-6xl'>Original Nivea Cream</h1>
                    <div className='flex items-center gap-8'>
                        <span className='text-5xl text-[#F8F8F8]'>Shop now</span>
                        <ArrowRight size={35} color='#F8F8F8'/>
                    </div>
                </div>
                <div className='px-8'>
                    <img src={big} alt="" className='max-w-80 max-h-80 object-cover' />
                </div>
            </div>

        </div>
    )
}