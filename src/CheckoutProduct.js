import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';


const CheckoutProduct = ({ind,title,price,ratings,image}) => {
  const [{basket},dispatch] = useStateValue();
  const REMOVEPRODUCT = () => {
    dispatch({
      type:"REMOVE_FROM_CART",
      item:{
        id:ind,
      }
    })
  }
  return (
    <div className="CheckoutProduct" key={ind}>
    <img src={image} className="CheckoutProduct_image"/>
  <div className="CheckoutProduct_container">
      <div>
        <h3><b>{title}</b></h3>
      </div>
      <div>
        <p>$<strong>{price}</strong></p>
      </div>
      <div>
        <h1 style={{color:"yellow"}}>{ratings}</h1>
      </div>
      <div>
        <button className="CheckoutProduct_button" onClick={REMOVEPRODUCT}>Remove from Cart</button>
      </div>
    </div>
    </div>
  )
}

export default CheckoutProduct
