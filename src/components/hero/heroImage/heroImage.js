import React from 'react';
import PropTypes from 'prop-types';
import Title from "../../title/title";
import { heroImage, heroTitle, heroText } from './heroImage.module.scss';
import { hero } from '../hero.module.scss';

function HeroImage(props) {
  const { children, title } = props;

  return (
    <div className={hero}>
      <div className={heroImage}>
        <div className={heroText}>
          <Title type={'h1'} className={heroTitle}>{title}</Title>
        </div>
        {children}
      </div>
    </div>
  );
}

HeroImage.defaultProps = {
  title: '',
};

HeroImage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default HeroImage;
