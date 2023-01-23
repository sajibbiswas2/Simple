import React, { useEffect, useState } from 'react';
import { addToDb, getStetCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
         }, []);

   useEffect(()=>{
    const stetCart=getStetCart();

    const savedCart=[];
     for(const id in stetCart){
        const addedProudect=products.find(prodect=>prodect.id===id);
        if(addedProudect){
            const quantity=stetCart[id];
            addedProudect.quantity=quantity;
           savedCart.push(addedProudect) 
        }
     }
     setCart(savedCart);

   },[products])
    

    const addToHandelCart = (selectedProdect) => {
        console.log(selectedProdect)
        let newCart=[];
        const exists=cart.find(prodect=>prodect.id===selectedProdect.id);
        if(!exists){
            selectedProdect.quantity=1;
            newCart=[...cart,selectedProdect];
        }
        else{
           const rest=cart.filter(prodect=>prodect.id  !==selectedProdect.id) ;
           exists.quantity=exists.quantity+1;
           newCart=[...rest.exists];
        }
        setCart(newCart);
        addToDb(selectedProdect.id)
    }


    return (
        <div className='shop-container'>
            <div className="prodect-container">
                {
                    products.map(prodect => <Prodect
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