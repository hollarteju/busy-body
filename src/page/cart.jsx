import Carts from '@/components/carts';
import Products from '@/components/products';
import { useState, useEffect } from 'react';
import { axiosEstore } from '@/package/eStoreAxios';

const CartComponent = ({getCarts}) => {
    const [cartItems, setCartItems] = useState([]);
    const [eStore, setEStore] = useState([]);

    const eStoreProducts = async()=>{
        try{
          const response = await axiosEstore("products.php");
          if(response.status == 200){
          const data = await response.data;
          setEStore(data.products);
          }
        }catch(error){
          console.log(error);
        }
      };
    
      useEffect(()=>{
        eStoreProducts();
      },[])
     
  useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("busy-body-cart")) || [];
      setCartItems(storedCart);
    }, []);

  return (
    <section>
      {cartItems.length == 0 &&
        <Carts/>
        }
        <div className='my-24'>
          {/*  */}
        <Products header="Add to cart products" eStore={cartItems} getCarts={getCarts} setCartItems={setCartItems} cartItems={cartItems}/>
        <Products header="On Discount Deals" eStore={eStore} getCarts={getCarts} setCartItems={setCartItems} cartItems={cartItems}/>
        </div>
    </section>
  );
};

export default CartComponent;