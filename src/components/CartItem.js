import React from 'react'
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem} from '../features/cart/cartSlice';


function CartItem({ id, img, title, price, amount }) {
  
  const dispatch = useDispatch()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove all items button */}
        <button className="remove-btn" onClick={()=>{dispatch(removeItem(id))}}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={()=>dispatch(increase(id))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={()=>{
          // if there's a single item and we are removing it, then it gets deleted from the cart
          if (amount === 1) {
            dispatch(removeItem(id))
            return;
          }
          dispatch(decrease(id))
          }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem