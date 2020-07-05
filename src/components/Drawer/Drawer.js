import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setCartState } from 'ducks';
import { useSelector } from 'react-redux';
import './Drawer.scss'

export default () => {
  const dispatch = useDispatch();
  const isOpenCart = useSelector(state => state.isOpenCart);
  const cartListFull = useSelector(state => state.goodsList.filter(itemOuter => state.cartList.find(item => itemOuter.id === item.id)));
  const totalPrice = useSelector(state => state.cartList.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.amount), 0));
  
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
          {cartListFull.map(item =>
            <section key={item.id} className="Drawer__cart-item">
              <img className="Drawer__cart-item-image" src={item.mainImage} alt="Good"/>
              <div className="Drawer__cart-item-info">
                <div className="Drawer__cart-item-info-description">{item.name}</div>
                <div className="Drawer__cart-item-info-amount">- 1 +</div>
              </div>
              <div className="Drawer__cart-item-info-price">${item.price}</div>
            </section>)}

          <div className="Drawer__cart-total-wrapper">
            <div className="Drawer__cart-total-label">Итого</div>
            <div className="Drawer__cart-total">
              ${totalPrice}
            </div>
          </div>

          <div className="Drawer__cart-button-wrapper">
            <button className="Drawer__cart-button">КУПИТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
