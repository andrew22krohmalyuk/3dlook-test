import React, { useState } from 'react';
import cn from 'classnames';
import { toggleCartList, setGoodItemPreview } from 'ducks';
import { useDispatch } from "react-redux";
import './Good.scss';

export default ({ id, type, name, mainImage, slideImages, amount, price }) => {
  const dispatch = useDispatch();
  const [currentIndexPreview, setCurrentImage] = useState(0);

  const onClickPreviewImage = (e, index, item) => {
    e.stopPropagation();
    setCurrentImage(index);
    dispatch(setGoodItemPreview({ id, mainImage: item }));
  };
  
  const onClickControlHandler = (e, value) => {
    e.stopPropagation();
    setCurrentImage(value);
    dispatch(setGoodItemPreview({ id, mainImage: slideImages[value] }));
  };
  
  return (
    <section className="Good" onClick={() => dispatch(toggleCartList({ id, amount: 1, price }))}>
      <img className="Good__picture" src={mainImage} alt="Good"/>
      <article className="Good__info">
        <div className="Good__info-content">
          <p className="Good__type">{type}</p>
          <h1 className="Good__description">{name}</h1>
          <p className="Good__price">${price}</p>
          <p className="Good__amount">на складе: {amount}</p>
        </div>

        <div className="Good__info-slider">
          <div
            className={cn("Good__info-slider-button-wrapper", { "Good__info-slider-button-wrapper--disabled": currentIndexPreview === 0  })}
            onClick={(e) => onClickControlHandler(e, currentIndexPreview - 1)}
          >
            <img className="Good__info-slider-button-left" src="/assets/arrow-right.png" alt="Left"/>
          </div>
          <div className="Good__info-slider-content">
            {slideImages.map((item, index) =>
              <img
                key={item}
                onClick={(e) => onClickPreviewImage(e, index, item)}
                className={
                  cn(
                    'Good__info-slider-content-item',
                    { 'Good__info-slider-content-item--active': index === currentIndexPreview })}
                src={item}
                alt="Good"
              />)}
          </div>
          <div
            className={cn("Good__info-slider-button-wrapper", { "Good__info-slider-button-wrapper--disabled": currentIndexPreview === (slideImages.length - 1)  })}
            onClick={(e) => onClickControlHandler(e, currentIndexPreview + 1)}
          >
            <img className="Good__info-slider-button-right" src="/assets/arrow-right.png" alt="Right"/>
          </div>
        </div>
      </article>
    </section>
  );
};
