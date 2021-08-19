import React  from 'react';
import './Subtotal.css';
import {useHistory} from 'react-router-dom';
const Subtotal = ({items,price}) => {
  const history = useHistory();
  return (
    <div className="Subtotal">
    <p className="Checkout_totaltitle">
      Subtotal ({items} items):<strong>$ {price}</strong>
     </p>
     <small className="Subtotal_small">
       <input type="checkbox"/>This order contains a gift
     </small>
  <button onClick={e=>history.push('/payment')}>Proceed To Checkout</button>
  </div>

  )
}

export default Subtotal
