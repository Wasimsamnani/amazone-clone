import './Product.css';
import {useStateValue} from './StateProvider';


const Product = ({id,title,price,image,ratings}) => {
  const [{},dispatch] = useStateValue();
  const Addtobasket = () =>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        ratings:ratings
      }
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p style={{fontFamily: "bold"}}><b>{title}</b></p>
      <p className="product_price">
        <b><small>$
        </small>
      <strong>
          {price}
        </strong></b>
      </p>
      <div className="product_rating">
         <p>{ratings}</p>
      </div>
      </div>
      <img src={image} className="product_img" alt=""/>
    <button onClick={Addtobasket}>Add to Basket</button>
    </div>
  )
}

export default Product
