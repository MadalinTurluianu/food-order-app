import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numerOfCartItems = cartCtx.items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.openCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numerOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
