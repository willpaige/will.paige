import React from 'react';
import './app.scss';
import classnames from "classnames";
import PropTypes from 'prop-types';
import Theme from '../theme/theme';
import Wrapper from '../wrapper/wrapper';
import Navigation from '../navigation/navigation';
import ThemeSwitch from '../themeSwitch/themeSwitch';
import { themeMap } from '../../constants/theme';
import {connect} from "react-redux";
import {isTrayActive} from "../../state/ui/ui-selectors";
import {toggleTray} from "../../state/ui/ui-action";
import { trayUnderlay, trayUnderlayIsActive } from  "./app.module.scss";

function App(props) {
  const { children, theme, activePage, dispatch, trayIsActive } = props;
  const trayUnderlayClass = classnames(trayUnderlay, {
    [trayUnderlayIsActive]: trayIsActive,
  });
  return (
    <Theme theme={theme}>
      <Wrapper>
        <ThemeSwitch />
        <Navigation activePage={activePage} />
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

App.defaultProps = {
  theme: themeMap.TEA_GREEN,
};

App.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  trayIsActive: PropTypes.bool.isRequired,
};

export default connect(state => ({
  trayIsActive: isTrayActive(state),
}), null)(App);
