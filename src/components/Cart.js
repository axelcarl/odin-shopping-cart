import { useEffect, useState } from 'react';
import '../styles/Cart.css'
import { Item } from './item';

export const Cart = (props) => {
  const { cart } = props;
  const { changeQty } = props;
  let [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(element => {
      total += parseInt(element.price) * parseInt(element.qty);
    });
    setOrderTotal(total)
  }, [cart])

  let returnJsx = <div className="Cart">
    <div className='scrollable'>
    {cart.map(item => {
      return <div className='cartItem' key={item.key}>
        <Item
          small
          name={item.name}
          price={item.price}
          image={item.image}>
        </Item>
        <div>
          <button onClick={event => changeQty(event, false, item)}>-</button>
          {item.qty}
          <button onClick={event => changeQty(event, true, item)}>+</button>
        </div>
      </div>
      
    })}
    </div>
    <div className='orderTotal'>
      <b><u>Order total: ${orderTotal}</u></b>
      <div className='addBtn' >Checkout</div>
    </div>
  </div>
  return returnJsx;
}