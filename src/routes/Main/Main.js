import React from 'react';
import { Header, Good } from 'components';
import './Main.scss'

export default () => {
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
            <Good />
            <Good />
            <Good />
            <Good />
            <Good />
          </section>
        </div>
      </div>
    </div>
  );
}
