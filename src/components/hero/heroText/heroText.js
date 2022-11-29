import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Title from '../../title/title';
import { heroTitle, heroDot } from './heroText.module.scss';

function HeroText(props) {
  const { className, title } = props;
  const heroTitleClass = classnames(className, heroTitle);

  return (
    <Title className={heroTitleClass} type="h1">
      {title}
      <span className={heroDot}>.</span>
    </Title>
  );
}

HeroText.defaultProps = {
  className: '',
};

HeroText.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HeroText;
