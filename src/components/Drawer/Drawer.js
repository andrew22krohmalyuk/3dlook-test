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
      </div>
    </div>
  );
}
