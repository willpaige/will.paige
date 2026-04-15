'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  themeBackgroundStyles,
  themeMap,
} from '../../constants/theme';
import {
  isActive,
  themeSwitch,
  button,
} from './themeSwitch.module.scss';
import { setTheme } from '../../state/ui/ui-action';
import { getActiveTheme } from '../../state/ui/ui-selectors';

function ThemeSwitch() {
  const activeTheme = useSelector(getActiveTheme);
  const dispatch = useDispatch();

  const setActiveTheme = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className={themeSwitch}>
      {Object.keys(themeMap).map((key) => {
        const theme = themeMap[key];
        const isActiveTheme = theme === activeTheme;
        const themeClass = classNames(button, themeBackgroundStyles[theme], isActiveTheme ? isActive : null);

        return (
          <button
            type="button"
            className={themeClass}
            onClick={() => { return setActiveTheme(theme); }}
            key={key}
            aria-label={`Switch to ${theme}`}
          />
        );
      })}
    </div>
  );
}

export default ThemeSwitch;
