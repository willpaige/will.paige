'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../state/ui/ui-action';
import { getActivePage } from '../../state/navigation/navigation-selectors';
import { PAGES } from '../../constants/pages';
import { backgroundGreyLightest } from '../../scss/theme.module.scss';

function Theme({ theme, children }) {
  const dispatch = useDispatch();
  const activePage = useSelector(getActivePage);

  dispatch(setTheme(theme));

  const themeClassName = activePage === PAGES.PROJECTS || activePage === PAGES.PROJECT ? backgroundGreyLightest : '';

  return (
    <div className={themeClassName}>
      {children}
    </div>
  );
}

export default Theme;
