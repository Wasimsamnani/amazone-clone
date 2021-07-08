import React from 'react'
import PropTypes from 'prop-types'
import './CheckoutProduct.css'
const CheckoutProduct = ({id,title,price,ratings,image}) => {
  return (
    <div className="CheckoutProduct">
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
        <button className="CheckoutProduct_button">Remove from Cart</button>
      </div>
    </div>
    </div>
  )
}

export default CheckoutProduct
