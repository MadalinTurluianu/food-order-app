import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numerOfCartItems = cartCtx.items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.items])

  return (
    <button className={buttonClasses} onClick={props.openCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numerOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
