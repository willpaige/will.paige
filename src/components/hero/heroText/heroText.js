import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../title/title';
import { heroTitle, heroDot } from './heroText.module.scss';

function HeroText(props) {
  const { title } = props;

  return (
    <>
      <Title className={heroTitle} type="h1">
        {title}
        <span className={heroDot}>.</span>
      </Title>
    </>
  );
}

HeroText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroText;
