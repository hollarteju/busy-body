import trending from "../assets/images/trending.jpg"

export default function Trending(){
    return(
        <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Trending News</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg  overflow-hidden hover:shadow-lg cursor-pointer sm:px-4 px-2">
                    <div className='flex items-center gap-8'>
                        <img src={trending} alt="News" className="w-full h-28 object-cover" />
                        <div className="flex flex-col py-2">
                            <h4 className="font-bold text-gray-900 mb-2">Lorem ipsum dolor sit</h4>
                            <small className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. 
                            </small>
                        </div>
                    </div>
                   <div className='py-2'>
                        <small>Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc.Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.</small>
                    </div>
                </div>
              ))}
            </div>
        </div>
    )
}