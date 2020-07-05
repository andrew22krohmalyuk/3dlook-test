import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setCartState } from 'ducks';
import { useSelector } from 'react-redux';
import './Drawer.scss'

export default () => {
  const dispatch = useDispatch();
  const isOpenCart = useSelector(state => state.isOpenCart);

  return (
    <div className={cn('Drawer', { 'Drawer--open': isOpenCart })}>
      <div className="Drawer__content">
        <div className="Drawer__close-wrapper" onClick={() => dispatch(setCartState(false))}>
          <img className="Drawer__close-icon"
            src="/assets/close.svg"
            alt="Close"
          />
        </div>

        <div className="Drawer__cart-items-wrapper">
          <section className="Drawer__cart-item">
            <img className="Drawer__cart-item-image" src="/goods/shirt.png" alt="Good"/>
            <div className="Drawer__cart-item-info">
              <div className="Drawer__cart-item-info-description">Рубашка на пуговицах</div>
              <div className="Drawer__cart-item-info-amount">- 1 +</div>
            </div>
            <div className="Drawer__cart-item-info-price">$320</div>
          </section>

          <section className="Drawer__cart-item">
            <img className="Drawer__cart-item-image" src="/goods/shirt.png" alt="Good"/>
            <div className="Drawer__cart-item-info">
              <div className="Drawer__cart-item-info-description">Рубашка на пуговицах</div>
              <div className="Drawer__cart-item-info-amount">- 1 +</div>
            </div>
            <div className="Drawer__cart-item-info-price">$320</div>
          </section>

          <div className="Drawer__cart-total-wrapper">
            <div className="Drawer__cart-total-label">Итого</div>
            <div className="Drawer__cart-total">$800</div>
          </div>

          <div className="Drawer__cart-button-wrapper">
            <button className="Drawer__cart-button">КУПИТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
