import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import {auth} from './Firebase';
const Header = (props) => {
  const [{basket,user}] = useStateValue();
  const singinhandeler = () => {
    if(user){
        auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" alt="amazon_logo"/>
  </Link>
    <div className="header_search">
      <input className="header_searchinput" type="text"/>
    <SearchIcon className="header_searchicon"/>
    </div>
    <div className="header_nav">
      <Link to={!user && '/Login'}>
    <div onClick={singinhandeler} className="header_options">
      <span className="header_lineone">Hello {!user?'Guest':user.email}</span>
    <span className="header_linetwo">{user?"Sign Out":"Sing In"}</span>
    </div>
  </Link>
  <Link to="/orders">
    <div className="header_options">
      <span className="header_lineone">Return</span>
    <span className="header_linetwo">& Orders</span>
    </div>
  </Link>
    <div className="header_options">
      <span className="header_lineone">Your</span>
    <span className="header_linetwo">Prime</span>
    </div>

    <Link to="/Checkout">
  <div className="header_optionbasket">
      <ShoppingBasketIcon />
    <span className="header_productcount">
        {basket?.length}
      </span>
    </div>
  </Link>
  </div>
  </div>
  )
}

export default Header;
