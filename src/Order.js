import React from 'react'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

const Order = ({order}) => {
  return (
    <div className="Order">
      <h2>Your Orders</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="Order_ids"><small>{order.id}</small></p>
      {order.data.basket?.map((items,ind) => {
          return<CheckoutProduct
          ind={ind}
          title={items.title}
          price={items.price}
          image={items.image}
          ratings={items.ratings}
          hide={true}
        />
      })}
      <h3 className="order_totalamount">Order Total: ${order.data.amount/100}</h3>
      </div>
  )
}

export default Order
