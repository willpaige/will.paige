import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTheme } from '../../state/ui/ui-action';
import { getActivePage } from '../../state/navigation/navigation-selectors';
import { PAGES } from '../../constants/pages';
import { backgroundGreyLightest } from '../../scss/theme.module.scss';

function Theme({
  theme, dispatch, children, activePage,
}) {
  dispatch(setTheme(theme));

  const themeClassName = activePage === PAGES.PROJECTS || activePage === PAGES.PROJECT ? backgroundGreyLightest : '';

  return (
    <div className={themeClassName}>
      {children}
    </div>
  );
}

Theme.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect(state => ({
  activePage: getActivePage(state),
}), null)(Theme);
