import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart,clearCart,children} = props;

  //console.log(cart);

  let total = 0;
  let shipping = 0;
 let quantity=0;
  for (const prodect of cart) {
    quantity=quantity+prodect.quantity;
    total = total + prodect.price*prodect.quantity;
    shipping = shipping + prodect.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const GrandTotal = total + shipping + tax;
  console.log(GrandTotal);
  return (
    <div className='carts'>
      <h2> this is cart container</h2>
      <p>selected Item:{quantity}</p>
      <p>Total price:${total}</p>
      <p>Total Shipping charge:${shipping}</p>
      <h5>Tax:${tax}</h5>
      <h2>Grand Total:${GrandTotal.toFixed(2)}</h2>
    <button onClick={clearCart }>clear cart</button>
      {children}
    </div>
  );
};

export default Cart;