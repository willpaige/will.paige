import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  navigation, link, linkIsActive, navigationContact
} from './navigation.module.scss';
import { PAGES } from '../../constants/pages';
import Contact from "../contact/contact";

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
      <Contact className={navigationContact} small />
    </div>
  );
}

Navigation.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default Navigation;
