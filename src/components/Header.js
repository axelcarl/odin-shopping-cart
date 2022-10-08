import { useState } from 'react';
import '../styles/Header.css'
import { Cart } from './Cart';
import { cartSvg } from './svgs';

export const Header = (props) => {
  const {cart, setCart} = props;
  const { getItemIndex } = props;
 
  const [showCart, setShowCart] = useState('hide');
  const viewCart = (e) => {
    if (showCart === 'hide')
      setShowCart('display');
    else  
    setShowCart('hide');
  }

  const changeQty =(e, addition, item) => {
    let cartCopy = [...cart];
    if (addition)
      cartCopy[getItemIndex(item, cart)].qty++;
    if (!addition)
      if (cartCopy[getItemIndex(item, cart)].qty > 1)
        cartCopy[getItemIndex(item, cart)].qty--;
      else
        cartCopy.splice(getItemIndex(item, cart), 1);
    setCart(cartCopy)
  }
  
  let showQty = '';
  if (cart.length > 0)
    showQty = <div className='cartQty'>{cart.length}</div>;

  let returnJSX = <div className="Header">
    <div></div>
    <a href='/'>Woolmade</a>
    <div className='cartBtn' onClick={viewCart}>{cartSvg}</div>
    {showQty}
    <div className={showCart}><Cart cart={cart} setCart={setCart} changeQty={changeQty}/></div>
  </div>;
  return returnJSX;
}