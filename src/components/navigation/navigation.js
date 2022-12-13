import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { PAGES_PATHS } from '../../constants/pages';
import Contact from '../contact/contact';
import Burger from '../burger/burger';
import {
  link, linkIsActive, navigation, navigationContact, navigationItems, navigationIsActive,
} from './navigation.module.scss';
import { isTrayActive } from '../../state/ui/ui-selectors';
import { toggleTray } from '../../state/ui/ui-action';
import { getActivePage } from '../../state/navigation/navigation-selectors';

function Navigation(props) {
  const { activePage, trayIsActive, dispatch } = props;
  const navigationClass = classnames(navigation, {
    [navigationIsActive]: trayIsActive,
  });
  const handleNavigation = (url) => {
    dispatch(toggleTray(false));
    navigate(url);
  };

  return (
    <>
      <div className={navigationClass}>
        <div className={navigationItems}>
          {Object.keys(PAGES_PATHS).map((key) => {
            const content = PAGES_PATHS[key];
            const isActive = activePage === key;
            const linkClass = classnames(link, isActive ? linkIsActive : '');

            return (
              <a
                role="button"
                className={linkClass}
                title={content.title}
                key={content.url}
                onClick={() => handleNavigation(content.url)}
              >
                {content.title}
              </a>
            );
          })}
        </div>
        <Contact className={navigationContact} small />
      </div>
      <Burger />
    </>
  );
}

Navigation.propTypes = {
  activePage: PropTypes.string.isRequired,
  trayIsActive: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  trayIsActive: isTrayActive(state),
  activePage: getActivePage(state),
}), null)(Navigation);
