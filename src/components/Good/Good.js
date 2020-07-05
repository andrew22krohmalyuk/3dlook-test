import React from 'react';
import { toggleCartList } from 'ducks';
import { useDispatch } from "react-redux";
import './Good.scss';

export default ({ id, type, name, mainImage, slideImages, amount, price }) => {
  const dispatch = useDispatch();
  return (
    <section className="Good" onClick={() => dispatch(toggleCartList({ id, amount: 0 }))}>
      <img className="Good__picture" src={mainImage} alt="Good"/>
      <article className="Good__info">
        <div className="Good__info-content">
          <p className="Good__type">{type}</p>
          <h1 className="Good__description">{name}</h1>
          <p className="Good__price">${price}</p>
          <p className="Good__amount">на складе: {amount}</p>
        </div>

        <div className="Good__info-slider">
          <div>L</div>
          <div className="Good__info-slider-content">
            <div className="Good__info-slider-content-item">1</div>
            <div className="Good__info-slider-content-item">2</div>
            <div className="Good__info-slider-content-item">3</div>
            <div className="Good__info-slider-content-item">4</div>
            <div className="Good__info-slider-content-item">5</div>
          </div>
          <div>R</div>
        </div>
      </article>
    </section>
  );
};
