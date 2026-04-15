'use client';

import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import Theme from '../theme/theme';
import Wrapper from '../wrapper/wrapper';
import Navigation from '../navigation/navigation';
import ThemeSwitch from '../themeSwitch/themeSwitch';
import { themeMap } from '../../constants/theme';
import { isTrayActive } from '../../state/ui/ui-selectors';
import { toggleTray } from '../../state/ui/ui-action';
import { trayUnderlay, trayUnderlayIsActive } from './app.module.scss';

function App({ children, theme = themeMap.THEME_1 }) {
  const trayIsActive = useSelector(isTrayActive);
  const dispatch = useDispatch();
  const trayUnderlayClass = classnames(trayUnderlay, {
    [trayUnderlayIsActive]: trayIsActive,
  });

  return (
    <Theme theme={theme}>
      <Wrapper>
        <ThemeSwitch />
        <Navigation />
        <main>
          {children}
        </main>
      </Wrapper>
      <div
        role="presentation"
        className={trayUnderlayClass}
        onClick={() => dispatch(toggleTray(false))}
        onKeyDown={() => dispatch(toggleTray(false))}
      />
    </Theme>
  );
}

export default App;
