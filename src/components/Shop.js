import { Item } from "./item";
import { itemList } from "./itemList";
import '../styles/Shop.css'

export const Shop = (props) => {

  const { cart, setCart } = props;
  const { getItemIndex } = props;

  const updateCart = (e, item) => {
    if (getItemIndex(item, cart) !== null) {
      let newCart = [...cart];
      newCart[getItemIndex(item, cart)].qty += 1;
      setCart(newCart);
    }
    else {
      setCart(cart.concat(item));
    }
  }

  let returnJsx =
    <div>
      <div className="Shop">
        <div className="ItemDisplay">
          {itemList.map(item => {
            return <Item
              onClick={event => updateCart(event, item)}
              key={item.key}
              name={item.name}
              price={item.price}
              image={item.image}>
            </Item>
          }
          )}
        </div>
      </div>
    </div>;

  return returnJsx;
}