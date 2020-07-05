import React from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from 'ducks';
import './Header.scss';

export default () => {
  const dispatch = useDispatch();

  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logo-container">
          <img className="Header__logo" src="assets/logo.png" alt="Logo"/>
        </div>
        <div className="Header__cart-wrapper" onClick={() => dispatch(setCartState(true))}>
          <img className="Header__cart-logo" src="assets/cart.svg" alt="Cart"/>
          <div className="Header__cart-counter">2</div>
        </div>
      </div>
    </header>
  );
}
