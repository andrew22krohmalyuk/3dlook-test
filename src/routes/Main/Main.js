import React, { useEffect, useState } from 'react';
import { fetchGoods } from 'ducks';
import { Header, Good } from 'components';
import { useSelector, useDispatch } from "react-redux";
import './Main.scss'

export default () => {
  const [isBusy, setBusy] = useState(true);
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
            <div className="Main__dropdown">
              <div className="Main__dropdown-label">
                Сортировать
              </div>
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
