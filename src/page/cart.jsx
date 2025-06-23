import Carts from '@/components/carts';
import Products from '@/components/products';


const CartComponent = () => {
 

  return (
    <section>
        <Carts/>
        <div className='my-24'>
        <Products header="On Discount Deals"/>
        </div>
    </section>
  );
};

export default CartComponent;