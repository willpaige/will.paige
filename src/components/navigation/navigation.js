'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
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

function Navigation() {
  const activePage = useSelector(getActivePage);
  const trayIsActive = useSelector(isTrayActive);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNavigation = (url) => {
    dispatch(toggleTray(false));
    router.push(url);
  };

  const navigationClass = classnames(navigation, {
    [navigationIsActive]: trayIsActive,
  });

  return (
    <>
      <div className={navigationClass}>
        <nav className={navigationItems}>
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
        </nav>
        <Contact className={navigationContact} small />
      </div>
      <Burger />
    </>
  );
}

export default Navigation;
