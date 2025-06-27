import { Phone, Mail, Share, ShoppingCart, ChevronRight } from 'lucide-react';


export default function ProductSideBar({selectedProduct, setIsOpen, setCurrentImageIndex, nextImage, productImages, currentImageIndex }){
    return(
        <div className="space-y-24">
            <div className='flex flex-col gap-12'>
                {/* Seller Info */}
                <div className="bg-white rounded-lg shadow-sm py-6 px-12">
                <div className="flex gap-8 items-center mb-4">
                    <div className="w-48 h-24 rounded-lg flex items-center justify-center">
                    <img src={`https://estores.ng/${selectedProduct?.seller_image}`} alt="" className='w-full object-cover h-full' />
                    </div>
                    <div className='w-full'>
                    <h3 className="font-semibold text-lg">{selectedProduct?.product_name}</h3>
                    <div className="flex items-center w-full">
                        <div className="relative w-full h-2 border rounded-lg overflow-hidden">
                            <div className="w-3/4 h-full bg-green-500"/>
                        </div>
                    </div>
                    </div>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-colors">
                    Request a call
                </button>
                
                <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>{selectedProduct?.phone_number}</span>
                    </div>
                    <div className="flex items-center text-gray-600">  
                    <Mail className="w-4 h-4 mr-3" />
                    <span>{selectedProduct?.product_email}</span>
                    </div>
                </div>
                </div>

                <button 
                className="w-full bg-red-600 hover:bg-red-700 text-white 
                font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                onClick={()=>setIsOpen(true)}
                >
                order
                </button>
            </div>
            <div className="flex space-x-3">
              {productImages.map((products,index) => (
                <div 
                  key={index}
                  className={`w-24 h-24 bg-white rounded-lg shadow-sm cursor-pointer border-2 flex-shrink-0 overflow-hidden ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={products} alt="" className='w-full h-full object-cover' />
                  </div>
                </div>
              ))}
            
              <button 
                onClick={nextImage}
                className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>

          </div>
    )
}