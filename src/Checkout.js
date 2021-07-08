import React,{useState} from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
const Checkout = (props) => {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="Checkout">
      <div>
        <h2 className="Chekout_title">Your Shoping  Basket</h2>
      {basket.map((items,ind) => (
        <CheckoutProduct
          id={Math.random()}
          title={items.title}
          price={items.price}
          image={items.image}
          ratings={items.ratings}
        />
    ))}
      </div>
      <div className="Checkout_right">
          <Subtotal items={basket?.length} price={basket.reduce((total,item) => {
            return total+item.price
          },0)}/>
      </div>
    </div>
  )
}

export default Checkout
