import '../styles/Item.css'

export const Item = (props) => {

  let clickDiv;
  if (props.onClick)
    clickDiv = <div className='addBtn' onClick={props.onClick}>Add to Cart</div>
  else {
    clickDiv = '';
  }
  let className = 'Item';
  if (props.small)
    className = 'Item-small';

    
  let returnJsx = <div className={className}>
    <img src={props.image} alt={props.name}/>
   <div>{props.name}</div>
   <div>${props.price}</div>
   {clickDiv}
    </div>;
  return returnJsx;
}