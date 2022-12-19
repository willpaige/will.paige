import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getActiveTheme } from '../../../state/ui/ui-selectors';
import {themeColorStyles, themeMap} from '../../../constants/theme';
import { setTheme } from '../../../state/ui/ui-action';
import Hero from '../hero';
import HeroText from '../heroText/heroText';
import HeroImage from '../heroImage/heroImage';
import {
  animate,
  heroDot,
  heroName,
  heroSubText,
  heroText,
  heroImageContainer,
  heroImageWrapper,
} from './heroIndex.module.scss';

function HeroIndex({ activeTheme, dispatch }) {
  const [disco, setDisco] = useState(0);
  const activeThemeClass = themeColorStyles[activeTheme];
  const dotClass = classNames(heroDot, animate, activeThemeClass);

  const party = () => {
    let count = 0;
    setDisco(setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 11);

      count = (count + randomNumber) % Object.entries(themeMap).length;

      const [newColour] = Object.entries(themeMap)[count];

      dispatch(setTheme(themeMap[newColour]));
    }, 115));
  };

  const endParty = () => {
    clearInterval(disco);
    setDisco(null);
  };

  const toggleParty = () => {
    if (disco) {
      endParty();
    } else {
      party();
    }
  };

  return (
    <Hero primaryHero>
      <HeroText className={heroText} gutterSm>
        <span>
          Hello
        </span>
        <span
          className={dotClass}
          onClick={() => toggleParty()}
        >
          .
        </span>
        <span className={heroName}>I&apos;m Will</span>{' '}
        <span className={heroSubText}>
          A senior
          {' '}
          <b className={activeThemeClass}> software engineer.</b>
        </span>
      </HeroText>
      <HeroImage className={heroImageWrapper} squareSm>
        <StaticImage
          className={heroImageContainer}
          src="../../../images/home/will_paige_software_engineer.png"
          alt="Will Paige Software Engineer"
          placeholder="blurred"
          loading="eager"
        />
      </HeroImage>
    </Hero>
  );
}

HeroIndex.propTypes = {
  activeTheme: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    return {
      activeTheme: getActiveTheme(state),
    };
  },
  null,
)(HeroIndex);
