import React from 'react';
import './Subtotal.css';

const Subtotal = ({items,price}) => {
  return (
    <div className="Subtotal">
    <p className="Checkout_totaltitle">
      Subtotal ({items} items):<strong>$ {price}</strong>
     </p>
     <small className="Subtotal_small">
       <input type="checkbox"/>This order contains a gift
     </small>
  <button>Proceed To Checkout</button>
  </div>

  )
}

export default Subtotal
