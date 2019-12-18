import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBtns.scss';

export const MenuBtns = () => {
  return (
    <div className="btns">
      <div className="btns__wrap">
        <Link className="btns__link" to="/menu">
          <button className="btns__link-btn">Food</button>
        </Link>

        <Link className="btns__link" to="/menu/drinks">
          <button className="btns__link-btn">Drinks</button>
        </Link>
      </div>
    </div>
  );
};
