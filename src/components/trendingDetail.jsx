import trending from "../assets/images/trending.jpg"


export default function TrendingDetail(){
    return(
        <div className="relative w-screen mt-24">
            <div className="max-w-6xl mx-auto bg-white border-b border-red-500 py-12">
                <div className="bg-white rounded-lg  overflow-hidden sm:px-4 px-2">
                    <div className='grid grid-cols-2 items-center gap-8 '>
                        <img src={trending} alt="News" className="w-full h-96 object-cover" />
                        <div className="flex flex-col gap-8 py-2 h-full">
                            <h4 className="font-bold text-gray-900 mb-2">Lorem ipsum dolor sit</h4>
                            <div className="flex flex-col gap-8">
                                <small className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. 
                                </small>
                                <small className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. 
                                </small>
                                <small className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. 
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className='py-2'>
                        <small>Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc.Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}