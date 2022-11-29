import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  burger, burgerIsActive, menu, burgerTitle, burgerIcon, menuIsActive
} from './burger.module.scss';
import { isTrayActive } from '../../state/ui/ui-selectors';
import { toggleTray } from '../../state/ui/ui-action';

function Burger(props) {
  const {
    trayIsActive,
    dispatch,
  } = props;

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

Burger.propTypes = {
  trayIsActive: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Burger.defaultProps = {
};

export default connect(state => ({
  trayIsActive: isTrayActive(state),
}), null)(Burger);
