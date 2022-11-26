import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { themeMap } from '../../constants/theme';
import {
  isActive, themeSwitch, button, teaGreen, laurelGreen, cambridgeBlue, taupeGray, oldLavender,
} from './themeSwitch.module.scss';
import { setTheme } from '../../state/ui/ui-action';
import { getActiveTheme } from '../../state/ui/ui-selectors';

const buttonThemes = {
  [themeMap.TEA_GREEN]: teaGreen,
  [themeMap.LAUREL_GREEN]: laurelGreen,
  [themeMap.CAMBRIDGE_BLUE]: cambridgeBlue,
  [themeMap.TAUPE_GRAY]: taupeGray,
  [themeMap.OLD_LAVENDER]: oldLavender,
};

function ThemeSwitch({ activeTheme, dispatch }) {
  const setActiveTheme = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className={themeSwitch}>
      {Object.keys(themeMap).map((key) => {
        const theme = themeMap[key];
        const isActiveTheme = theme === activeTheme;
        const themeClass = classNames(button, buttonThemes[theme], isActiveTheme ? isActive : null);

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
