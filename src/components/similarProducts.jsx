import { ShoppingCart, Share2} from 'lucide-react';
import ultra from "../assets/images/ultra.png";
import dove from "../assets/images/dove.png";
import eye_shadow from "../assets/images/eye_shadow.png";
import { Link } from 'react-router-dom';
import Products from './products';

export default function SimilarProducts(){
     const products = [
        { id: 1, name: 'Sanitary pads', price: '50,000', image: ultra, rating: 13 },
        { id: 2, name: 'Eye Shadow', price: '50,000', image: eye_shadow, rating: 13 },
        { id: 3, name: 'Dove Cup Cream', price: '50,000', image: dove, rating: 13 },
        { id: 4, name: 'Sanitary pads', price: '50,000', image: ultra, rating: 13 },
      ];
      
    return(
        <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-12">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
            {products.map((product, index) => (
              <Link key={index} to="/product-review" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {product.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-green-600 mb-4"># {product.price}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-4 bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}