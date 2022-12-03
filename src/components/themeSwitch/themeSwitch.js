import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

function ThemeSwitch({ activeTheme, dispatch }) {
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
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className={themeClass}
            onClick={() => { return setActiveTheme(theme); }}
            key={key}
          />
        );
      })}
    </div>
  );
}

ThemeSwitch.propTypes = {
  activeTheme: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    return {
      activeTheme: getActiveTheme(state),
    };
  },
  null,
)(ThemeSwitch);
