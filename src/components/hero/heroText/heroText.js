import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Title from '../../title/title';
import { isJustText, heroTitleContainer, heroTitle, heroSubTitle, heroDot, hasGutterSm, isOverImage, isSmallTitle, } from './heroText.module.scss';

function HeroText(props) {
  const { className, justText, children, showDot, gutterSm, overlayImage, smallTitle, subtitle, content } = props;
  const heroTitleContainerClass = classnames(className, heroTitleContainer, {
    [hasGutterSm]: gutterSm,
    [isOverImage]: overlayImage,
    [isJustText]: justText,
  });
  const heroTitleClass = classnames(heroTitle, {
    [isSmallTitle]: smallTitle,
  });

  return (
    <div className={heroTitleContainerClass}>
      <Title className={heroTitleClass} type="h1">
        {children}
        {showDot && <span className={heroDot}>.</span>}
      </Title>
      {subtitle && (
        <Title className={heroSubTitle} type="h2">{subtitle}</Title>
      )}
      {content}
    </div>
  );
}

HeroText.defaultProps = {
  className: '',
  showDot: false,
  gutterSm: false,
  overlayImage: false,
  justText: false,
  smallTitle: false,
  subtitle: undefined,
  content: undefined,
};

HeroText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showDot: PropTypes.bool,
  gutterSm: PropTypes.bool,
  overlayImage: PropTypes.bool,
  justText: PropTypes.bool,
  smallTitle: PropTypes.bool,
  subtitle: PropTypes.string,
  content: PropTypes.node,
};

export default HeroText;
