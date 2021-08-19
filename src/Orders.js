import React,{useState,useEffect} from 'react';
import { db } from './Firebase';
import {useStateValue} from './StateProvider';
import './Orders.css';
import Order from './Order';
const Orders = () => {
  const  [Orders,setOrders] = useState([]);
  const [{basket,user}] = useStateValue();
  useEffect(() => {
    if (user) {
      db.collection("users").
      doc(user?.uid).
      collection('orders').
      orderBy('created','desc').
      onSnapshot((snapshot)=>{
       setOrders(snapshot.docs.map((doc) => ({id:doc.id,
           data:doc.data()}
         )))
       })
    }else{
      setOrders([]);
    }
  },[user]);
  return (
    <div className="Orders">
      {!user?<h2>You are not log In, Please log In to see your Orders</h2>:Orders?.map(data=>(
      <Order order={data}/>
    ))}
    </div>
  )
}

export default Orders;
