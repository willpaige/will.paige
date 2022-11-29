import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Title from '../../title/title';
import { getActiveTheme } from '../../../state/ui/ui-selectors';
import { themeMap } from '../../../constants/theme';
import { setTheme } from '../../../state/ui/ui-action';
import { hero } from '../hero.module.scss';
import {
  animate,
  heroDot,
  heroImage,
  heroTitle,
  heroHello,
  heroName,
  teaGreen,
  laurelGreen,
  cambridgeBlue,
  oldLavender,
  heroSubText,
} from './heroIndex.module.scss';

const contentThemes = {
  [themeMap.TEA_GREEN]: teaGreen,
  [themeMap.LAUREL_GREEN]: laurelGreen,
  [themeMap.CAMBRIDGE_BLUE]: cambridgeBlue,
  // [themeMap.TAUPE_GRAY]: taupeGray,
  [themeMap.OLD_LAVENDER]: oldLavender,
};

function HeroIndex({ activeTheme, dispatch }) {
  const [disco, setDisco] = useState();
  const activeThemeClass = contentThemes[activeTheme];
  const dotClass = classNames(heroHello, heroDot, animate, activeThemeClass);

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
  };

  return (
    <div className={hero}>
      <Title className={heroTitle} type="h1">
        <span className={heroHello}>
          Hello
        </span>
        <span
          className={dotClass}
          onMouseEnter={() => party()}
          onMouseLeave={() => endParty()}
        >
          .
        </span>
        <span className={heroName}>I&apos;m Will</span>
        <span className={heroSubText}>
          A senior
          <b className={activeThemeClass}> software engineer.</b>
        </span>
      </Title>
      <StaticImage className={heroImage} src="../../../images/will_paige_software_engineer.png" alt="Will Paige Software Engineer" placeholder="blurred" />
    </div>
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
