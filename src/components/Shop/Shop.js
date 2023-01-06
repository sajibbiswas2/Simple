import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import'./Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
     const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const addToHandelCart=(prodect)=>{
        console.log(prodect)
        const newCart=[...cart,prodect];
        setCart(newCart);
    }
  

    return (
        <div className='shop-container'>
              <div className="prodect-container">
               {
                products.map(prodect=><Prodect 
                    key={products.id}
                    prodect={prodect}
                    addToHandelCart={addToHandelCart}
                    ></Prodect>)
               }    
              </div>
              <div className="cart-container">
                <Cart cart={cart}></Cart> 
              </div>
        </div>
    );
};

export default Shop;