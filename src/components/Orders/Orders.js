
import React,{ useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Revewitem from '../Revewitem/Revewitem';

const Orders = () => {
    const { products, previousCart } = useLoaderData();//{ products: products, previousCart: previousCart }
    const [cart, setCart] = useState(previousCart);

    const handleRemoveLtem=(id)=>{
     const remaining =cart.filter(product=>product.id!==id);
     setCart(remaining)
     removeFromDb(id);
    }

    const clearCart=()=>{
        setCart([])
        deleteShoppingCart();

    }


    return (
        <div className='shop-container'>
            <div className='orders-container'>
               {
                cart.map(product=><Revewitem
                key={product.id}
                product={product}
                handleRemoveLtem={handleRemoveLtem}
                ></Revewitem>)
               }
               {
                cart.length ===0 &&<h2>No items for review.pleas the shop .please <Link to="/">shop more</Link></h2>
               }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
