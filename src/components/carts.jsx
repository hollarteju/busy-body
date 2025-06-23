import { ShoppingCart } from 'lucide-react';


export default function Carts(){
     const handleStartShopping = () => {
    alert('Start shopping clicked');
  };
    return(
        <div className="bg-gray-50 max-w-screen-xl mx-auto my-12 flex items-center justify-center p-24 rounded-xl shadow-xl">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-red-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-red-500" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Your Cart Is Empty!
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Browse our category and discover our best deals
        </p>
        <button
          onClick={handleStartShopping}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Start Shopping
        </button>
      </div>
    </div>
    )
}