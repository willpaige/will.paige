import React from 'react';
import PropTypes from 'prop-types';
import { heroImage, isSquareSm, overlayText } from './heroImage.module.scss';
import classnames from "classnames";

function HeroImage(props) {
  const { children, hasOverlayText, squareSm, className } = props;

  const heroImageClass = classnames(heroImage, className, {
    [isSquareSm]: squareSm,
    [overlayText]: hasOverlayText,
  });

  return (
    <div className={heroImageClass}>
        {children}
    </div>
  );
}

HeroImage.defaultProps = {
  squareSm: false,
  hasOverlayText: false,
  className: '',
};

HeroImage.propTypes = {
  children: PropTypes.node.isRequired,
  squareSm: PropTypes.bool,
  className: PropTypes.string,
  hasOverlayText: PropTypes.bool,
};

export default HeroImage;
