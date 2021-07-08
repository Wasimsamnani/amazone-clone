import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
const Header = (props) => {
  const [{basket},dispatch] = useStateValue();
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
    <div className="header_options">
      <span className="header_lineone">Hello Guest</span>
    <span className="header_linetwo">Sing in</span>
    </div>
    <div className="header_options">
      <span className="header_lineone">Return</span>
    <span className="header_linetwo">& Orders</span>
    </div>
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
