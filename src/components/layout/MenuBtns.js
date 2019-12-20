import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBtns.scss';

export const MenuBtns = () => {
  const [toggleBtnsState, setToggleBtnsState] = useState({
    isActive: true,
    act: 1,
    inAct: 2,
    isDisabled: true,
    active: false
  });

  const { isActive, act, inAct, isDisabled, active } = toggleBtnsState;

  const btnsStyleToggle = () => {
    // e.preventDefault();
    isActive
      ? setToggleBtnsState({
          isActive: false,
          act: 2,
          inAct: 1,
          isDisabled: false,
          active: true
        })
      : setToggleBtnsState({
          isActive: true,
          act: 1,
          inAct: 2,
          isDisabled: true,
          active: false
        });
  };

  return (
    <div className="btns">
      <div className="btns__wrap">
        <Link className="btns__link" to="/menu">
          <button
            disabled={isDisabled}
            className={`btns__link-btn btn-${act}`}
            onClick={btnsStyleToggle}
          >
            Food
          </button>
        </Link>

        <Link className="btns__link" to="/menu/drinks">
          <button
            disabled={active}
            className={`btns__link-btn btn-${inAct}`}
            onClick={btnsStyleToggle}
          >
            Drinks
          </button>
        </Link>
      </div>
    </div>
  );
};
