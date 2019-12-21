import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBtns.scss';

export const MenuBtns = () => {
  const [btnActiveState, setBtnActiveState] = useState({
    isActive: true,
    activeStyle: {
      border: '#9d231f',
      color: '#ffb915'
    }
  });

  const { isActive, activeStyle } = btnActiveState;

  const addActiveClass = () => {
    isActive
      ? setBtnActiveState({ isActive: false })
      : setBtnActiveState({ isActive: true });
  };

  return (
    <div className="btns">
      <div className="btns__wrap">
        <Link className="btns__link" to="/menu">
          <button
            style={isActive ? { activeStyle } : null}
            className={`btns__link-btn`}
            onClick={addActiveClass}
          >
            Food
          </button>
        </Link>

        <Link className="btns__link" to="/menu/drinks">
          <button
            style={isActive ? null : { activeStyle }}
            className={`btns__link-btn`}
            onClick={addActiveClass}
          >
            Drinks
          </button>
        </Link>
      </div>
    </div>
  );
};
