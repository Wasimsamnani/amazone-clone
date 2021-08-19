import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';


const CheckoutProduct = ({ind,title,price,ratings,image,hide}) => {
  const [{},dispatch] = useStateValue();
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
    <img src={image} className="CheckoutProduct_image" alt=""/>
  <div className="CheckoutProduct_container">
      <div className="Checkout_title">
        <h3>{title}</h3>
      </div>
      <div>
        <p>$<strong>{price}</strong></p>
      </div>
      <div>
        <h1 style={{color:"yellow"}}>{ratings}</h1>
      </div>
      <div>
        {hide?null:<button className="CheckoutProduct_button" onClick={REMOVEPRODUCT}>Remove from Cart</button>}
      </div>
    </div>
    </div>
  )
}

export default CheckoutProduct
