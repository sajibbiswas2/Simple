import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Prodect.css';
const Prodect = (props) => {
    const {name,img,seller,price,stock}=props.prodect;
     const {addToHandelCart}=props
  
    return (
        <div className='prodect'>
           <img src={img} alt="" /> 
           <div className="prodect-info">
           <p className='prodect-name'>{name}</p>
              <p>price:{price}</p>
              <p>stock:{stock}</p>
              <p><small>seller:{seller}stars</small></p>
           </div>
              <button  onClick={()=>props.addToHandelCart(props.prodect)} className='btn-cart'>
                <p className='cart-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
              </button>
        </div>
    );
};

export default Prodect;