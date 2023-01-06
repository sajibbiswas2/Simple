import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4> this is cart container</h4>
                 <p>selected Item:{cart.length}</p>
                
        </div>
    );
};

export default Cart;