import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setCartState } from 'ducks';
import './Header.scss';

export default () => {
  const dispatch = useDispatch();
  const cartListLength = useSelector(state => state.cartList.length);

  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logo-container">
          <img className="Header__logo" src="assets/logo.png" alt="Logo"/>
        </div>
        <div
          className={cn('Header__cart-wrapper', { 'Header__cart-wrapper--disabled': cartListLength === 0 })}
          onClick={() => dispatch(setCartState(true))}
        >
          <img
            className={cn('Header__cart-logo', { 'Header__cart-logo--disabled': cartListLength === 0 })}
            src="assets/cart.svg"
            alt="Cart"
          />
          {cartListLength !== 0 && <div className="Header__cart-counter">{cartListLength}</div>}
        </div>
      </div>
    </header>
  );
}
