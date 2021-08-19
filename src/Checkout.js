import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
const Checkout = (props) => {
  const [{basket,user}] = useStateValue();
  return (
    <div className="Checkout">
      <div>
        <h3> {user?`hello ${user.email},`:null}</h3>
        <h2 className="Chekout_title">Your Shoping  Basket</h2>
      {basket.map((items,ind) => (
        <CheckoutProduct
          ind={ind}
          title={items.title}
          price={items.price}
          image={items.image}
          ratings={items.ratings}
        />
    ))}
      </div>
      <div className="Checkout_right">
          <Subtotal items={basket?.length} price={basket.reduce((total,item) => {
            return Math.ceil(total+item.price)
          },0)}/>
      </div>
    </div>
  )
}

export default Checkout
