import React,{useState,useEffect} from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
import {useHistory} from 'react-router-dom';
import axios from './Axios';
import {db} from './Firebase';
const Payment = (props) => {
  const [{basket,user},dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [suceeded,setsuceeded] = useState(false);
  const [processing,setprocessing] = useState("");
  const [disable,setdisable] = useState(true);
  const [error,seterror] = useState(null);
  const [clientSecrect,setclientSecrect] = useState(true);
  var total = basket.reduce((total,item)=>{return total+item.price},0);
    useEffect(() => {
      const getClientSecret = async () => {
         const response = await axios({
             method: 'post',
             // Stripe expects the total in a currencies subunits
             url: `/payments/create?total=${total*100}`
         });
         setclientSecrect(response.data.clientSecret)
     }

     getClientSecret();
 }, [basket])

  const handelesubmit = async (e) => {
      e.preventDefault();
      setprocessing(true);
      const payload = await stripe.confirmCardPayment(clientSecrect,{
        payment_method:{
          card:elements.getElement(CardElement)
        }
      }).then((result)=>{
        if(user){
         db.collection("users").doc(user?.uid).collection("orders").doc(result.error.payment_intent.id).set({
          basket:basket,
          amount:result.error.payment_intent.amount,
          created:result.error.payment_intent.created
        });
        setsuceeded(true);
        seterror(null);
        setprocessing(false);
        dispatch({
          type:"EMPTY_BASKET"
        })
        history.replace('/orders');
      }
      }).catch(err=>{return seterror(err)
        setprocessing(false)});
      }
  const changehandeler = (e) => {
    setdisable(e.empty);
    seterror(e.error.message);
  }
  return (
    <div className="Payment">
      <div className="payment_container">
        <h1>Checkout (
            {<Link to="/Checkout" className="link"> {basket?.length} items</Link>})
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delevery Address</h3>
          </div>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 React lane</p>
              <p>los Angeles,CA</p>
            </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
          <h3>Review items And Delevery</h3>
          </div>
          <div className="payment_items">
            {basket?.map((items,ind) => (
              <CheckoutProduct
                ind={ind}
                title={items.title}
                price={items.price}
                image={items.image}
                ratings={items.ratings}
              />
          ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
          <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form>
            <CardElement onChange={changehandeler}/>
          </form>
            <div className="payment_pricecontainer"><b>Order Total: $
            {Math.ceil(total)}</b>
          </div>
            <input type="button" disabled={disable||processing||suceeded}
              value={processing?"Processing":"Buy Now"} onClick={handelesubmit} className="payment_button"/>
          <div>
          {error?<div>{error}</div>:null}
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
