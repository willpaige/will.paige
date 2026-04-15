'use client';

import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {
  burger, burgerIsActive, menu, burgerTitle, burgerIcon, menuIsActive
} from './burger.module.scss';
import { isTrayActive } from '../../state/ui/ui-selectors';
import { toggleTray } from '../../state/ui/ui-action';

function Burger() {
  const trayIsActive = useSelector(isTrayActive);
  const dispatch = useDispatch();

  const burgerClass = classnames(burger, {
    [burgerIsActive]: trayIsActive,
  });
  const menuClass = classnames(menu, {
    [menuIsActive]: trayIsActive,
  });

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTray(!trayIsActive))}
      className={menuClass}
    >
      <span className={burgerTitle}>
        {trayIsActive ? 'CLOSE' : 'MENU'}
      </span>
      <span className={burgerClass}>
        <i className={burgerIcon}></i>
      </span>
    </button>
  );
}

export default Burger;
