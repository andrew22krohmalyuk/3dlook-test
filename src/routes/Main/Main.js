import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { TYPES } from 'api';
import { fetchGoods, setFilter, sortFromExpensiveToCheap, sortFromCheapToExpensive, filterPopular } from 'ducks';
import { Header, Good } from 'components';
import { useSelector, useDispatch } from "react-redux";
import './Main.scss'

export default () => {
  const [isBusy, setBusy] = useState(true);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const goodsList = useSelector(state => state.goodsList);
  const activeFilter = useSelector(state => state.activeFilter);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchGoods())
      .finally(() => setBusy(false))
  }, []);
  
  const onClickShowAllHandler = () => {
    setBusy(true);
    dispatch(fetchGoods())
      .finally(() => setBusy(false));
    dispatch(setFilter(null));
  };
  
  return (
    <div className="Main">
      <Header />
      <div className="Main__content">
        <div className="Main__wrapper">
          <nav className="Main__navigation-wrapper">
            <ul className="Main__navigation-items-wrapper">
              <li className="Main__navigation-item Main__navigation-item--bold" onClick={onClickShowAllHandler}>ВСЕ</li>
              <li className="Main__navigation-item" onClick={() => dispatch(setFilter(TYPES.RAINCOATS))}>Плащи</li>
              <li className="Main__navigation-item" onClick={() => dispatch(setFilter(TYPES.SNEAKERS))}>Кроссовки</li>
              <li className="Main__navigation-item" onClick={() => dispatch(setFilter(TYPES.SHIRT))}>Рубашки</li>
              <li className="Main__navigation-item" onClick={() => dispatch(setFilter(TYPES.PANTS))}>Брюки</li>
            </ul>
            <div className="Main__dropdown" onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
              <div className="Main__dropdown-label">
                <span>Сортировать</span>
                <img className={cn("Main__dropdown-image", { "Main__dropdown-image--opened": isOpenDropdown })} src="/assets/arrow-up.png"/>
              </div>
              
              {isOpenDropdown && <ul className="Main__dropdown-menu">
                <li className="Main__dropdown-menu-item" onClick={() => dispatch(sortFromExpensiveToCheap())}>От дорогих к дешевым</li>
                <li className="Main__dropdown-menu-item" onClick={() => dispatch(sortFromCheapToExpensive())}>От дешевых к дорогим</li>
                <li className="Main__dropdown-menu-item" onClick={() => dispatch(filterPopular())}>Популярные</li>
                <li className="Main__dropdown-menu-item">Новые</li>
              </ul>}
            </div>
          </nav>
          
          {isBusy
            ? <div className="Main__loader-wrapper">
                <div className="Main__loader">Loading...</div>
              </div>
            : goodsList
                .filter(item => activeFilter ? item.type === activeFilter : true).length > 0 &&
                  <section className="Main__goods-grid">
                    {goodsList
                      .filter(item => activeFilter ? item.type === activeFilter : true)
                      .map(item =>
                        <Good
                          key={item.id}
                          {...item}
                        />)}
                  </section>}
        </div>
      </div>
    </div>
  );
}
