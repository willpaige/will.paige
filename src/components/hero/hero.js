import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import {
  hero,
  isPrimaryHero,
  isTextTopSm,
} from './hero.module.scss';

function Hero(props) {
  const { className, children, primaryHero, textTopSm } = props;
  const heroClass = classnames(className, hero, {
    [isPrimaryHero]: primaryHero,
    [isTextTopSm]: textTopSm,
  });

  return <div className={heroClass}>{children}</div>;
}

export default Hero;

Hero.defaultProps = {
  className: '',
  primaryHero: false,
  textTopSm: false,
};

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  primaryHero: PropTypes.bool,
  textTopSm: PropTypes.bool,
};
