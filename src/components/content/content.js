import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import {
  content,
  contentHole,
  noMargin,
  animateHole,
  isActive,
  noBackgroundColor,
} from './content.module.scss';
import { getActiveTheme } from '../../state/ui/ui-selectors';
import { themeBackgroundStyles } from '../../constants/theme';

function Content(props) {
  const {
    className, activeTheme, children, noHero, noBackground,
  } = props;
  const [hiCat, showCat] = useState(0);

  const contentClassName = classNames(content, className, themeBackgroundStyles[activeTheme], {
    [noMargin]: noHero,
    [noBackgroundColor]: noBackground,
  });

  const animateHoleClass = classNames(animateHole, {
    [isActive]: hiCat || '',
  });

  return (
    <div className={contentClassName}>
      {children}
      <div className={contentHole} onClick={() => showCat(!hiCat)}>
        <div className={animateHoleClass}>
          <StaticImage src="../../images/kitty_cat.png" alt="Cat hiding" />
        </div>
      </div>
    </div>
  );
}

Content.defaultProps = {
  noHero: false,
  className: '',
  noBackground: false,
};

Content.propTypes = {
  activeTheme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noHero: PropTypes.bool,
  noBackground: PropTypes.bool,
};

export default connect(
  (state) => {
    return {
      activeTheme: getActiveTheme(state),
    };
  },
  null,
)(Content);
