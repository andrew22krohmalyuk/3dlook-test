import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { fetchGoods } from 'ducks';
import { Header, Good } from 'components';
import { useSelector, useDispatch } from "react-redux";
import './Main.scss'

export default () => {
  const [isBusy, setBusy] = useState(true);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const goodsList = useSelector(state => state.goodsList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchGoods())
      .finally(() => setBusy(false))
  }, []);
  
  return (
    <div className="Main">
      <Header />
      <div className="Main__content">
        <div className="Main__wrapper">
          <nav className="Main__navigation-wrapper">
            <ul className="Main__navigation-items-wrapper">
              <li className="Main__navigation-item Main__navigation-item--bold">ВСЕ</li>
              <li className="Main__navigation-item">Плащи</li>
              <li className="Main__navigation-item">Кроссовки</li>
              <li className="Main__navigation-item">Рубашки</li>
              <li className="Main__navigation-item">Брюки</li>
            </ul>
            <div className="Main__dropdown" onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
              <div className="Main__dropdown-label">
                <span>Сортировать</span>
                <img className={cn("Main__dropdown-image", { "Main__dropdown-image--opened": isOpenDropdown })} src="/assets/arrow-up.png"/>
              </div>
              
              {isOpenDropdown && <ul className="Main__dropdown-menu">
                <li className="Main__dropdown-menu-item">От дорогих к дешевым</li>
                <li className="Main__dropdown-menu-item">От дешевых к дорогим</li>
                <li className="Main__dropdown-menu-item">Популярные</li>
                <li className="Main__dropdown-menu-item">Новые</li>
              </ul>}
            </div>
          </nav>
          
          <section className="Main__goods-grid">
            {isBusy && <div>Loading...</div>}
            {goodsList.map(item =>
              <Good
                key={item.id}
                {...item}
              />)}
          </section>
        </div>
      </div>
    </div>
  );
}
