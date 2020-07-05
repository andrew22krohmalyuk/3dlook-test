import React from 'react';
import './Good.scss';

export default () => {
  return (
    <section className="Good">
      <img className="Good__picture" src="/goods/shirt.png" alt="Good"/>
      <article className="Good__info">
        <div className="Good__info-content">
          <p className="Good__type">РУБАШКИ</p>
          <h1 className="Good__description">Рубашка с принтом</h1>
          <p className="Good__price">$170</p>
          <p className="Good__amount">на складе: 11</p>
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
