import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  navigation, link, linkIsActive,
} from './navigation.module.scss';
import { themeMap } from '../../constants/theme';
import { PAGES } from '../../constants/pages';

const links = {
  [PAGES.HOME]: {
    title: 'Home',
    url: '/',
  },
  [PAGES.ABOUT]: {
    title: 'About',
    url: '/about/',
  },
  [PAGES.WORK]: {
    title: 'Work',
    url: '/work/',
  },
  [PAGES.EDUCATION]: {
    title: 'Education',
    url: '/education/',
  },
  // [PAGES.SERVICES]: {
  //   title: 'Services',
  //   url: '/services/',
  // },
  [PAGES.CONTACT]: {
    title: 'Contact',
    url: '/contact/',
  },
};

function Navigation(props) {
  const { activePage } = props;

  return (
    <div className={navigation}>
      {Object.keys(links).map((key) => {
        const content = links[key];
        const isActive = activePage === key;
        const linkClass = classNames(link, isActive ? linkIsActive : '');

        return (
          <Link className={linkClass} title={content.title} to={content.url} key={content.url}>{content.title}</Link>
        );
      })}
    </div>
  );
}

Navigation.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default Navigation;
