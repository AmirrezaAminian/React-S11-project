import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

  const cartCtx = useContext(CartContext) ;

  const numberOfCartItems = cartCtx.items.reduce((cur , item) => {
    return cur + item.amount
  } ,0)

    return (
      <button className={classes.button} onClick={props.onShown}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
}

export default HeaderCartButton ;



//* Alan bayad befahmam to Items chi mire