import { ShoppingCart, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Products({ header, grid, eStore, getCarts, setCartItems, cartItems}) {
  const route = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("busy-body-cart")) || [];
    setCartItems(storedCart);
  }, []);

  const selectedProduct = (detail) => {
    localStorage.setItem("product-details", JSON.stringify(detail));
    route('/product-review');
  };

  const cartHandler = (item) => {
    const exists = cartItems.some(i => i.id === item.id);
    const updatedCart = exists
      ? cartItems.filter(i => i.id !== item.id)
      : [...cartItems, item];

    localStorage.setItem("busy-body-cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); 
    getCarts()
  };
  

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-12">{header}</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${grid ? "lg:grid-cols-3 gap-4" : "lg:grid-cols-4 gap-12"}`}>
          {eStore?.map((product, index) => {
            const inCart = cartItems.some(i => i.id === product.id);
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative cursor-pointer" onClick={() => selectedProduct(product)}>
                  <img src={`https://estores.ng/${product.product_image}`} alt={product.product_name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {product.product_views}
                  </div>
                </div>
                <div className="py-6 px-4 flex items-center justify-between">
                  <div className='w-full'>
                    <h3 className="font-semibold text-[#333333] mb-2">{product.product_name}</h3>
                    <p className="text-sm mb-4 text-gray-900"># {product.product_price}</p>
                  </div>
                  <div className="w-full flex items-center justify-end gap-4">
                    <ShoppingCart
                      size={25}
                      color='#545454'
                      fill={inCart ? '#545454' : 'none'} // fill if in cart
                      className='cursor-pointer'
                      onClick={() => cartHandler(product)}
                    />
                    <Heart size={25} color='#545454' className='cursor-pointer' />
                  </div>
                  <div className="mt-4 bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
