import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { AiFillApple } from '@react-icons/all-files/ai/AiFillApple';
import {
  appleIcon,
  mobileScreenInner,
  mobileScreenOuter,
  mobileScreenNotch,
  buttons,
  desktopButton,
  base,
  mobileScreen,
  desktopScreenBottom,
  desktopScreenScroll,
  desktopScreenScrollInner,
  scroll,
  foot,
  footBottom,
  footTop,
  greyShadow,
  screenScroll,
} from './screenScroll.module.scss';
import { ScreenTypes } from '../../constants/screenTypes';
import Button from '../button/button';

function ScreenScroll(props) {
  const { className, desktop, mobile, defaultScreen } = props;
  const [screenType, setScreenType] = useState(defaultScreen);
  const screenScrollClass = classnames(screenScroll, className);

  return (
    <div className={screenScrollClass}>
      <div className={buttons}>
        <Button className={desktopButton} active={screenType === ScreenTypes.DESKTOP} onClick={() => setScreenType(ScreenTypes.DESKTOP)}>Desktop</Button>
        <Button active={screenType === ScreenTypes.MOBILE} onClick={() => setScreenType(ScreenTypes.MOBILE)}>Mobile</Button>
      </div>
      {screenType === ScreenTypes.DESKTOP ? (
        <div className={desktopScreenScroll}>
          <div className={desktopScreenScrollInner}>
            <div className={scroll}>
              {desktop}
            </div>
          </div>
          <div className={desktopScreenBottom}>
            <div className={appleIcon}>
              <AiFillApple />
            </div>
          </div>
          <div className={base}>
            <div className={greyShadow} />
            <div className={classnames(foot, footTop)} />
            <div className={classnames(foot, footBottom)} />
          </div>
        </div>
      ) : (
        <div className={mobileScreen}>
          <div className={mobileScreenOuter}>
            <div className={mobileScreenNotch} />
            <div className={mobileScreenInner}>
              <div className={scroll}>
                {mobile}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ScreenScroll.defaultProps = {
  className: '',
  defaultScreen: ScreenTypes.DESKTOP,
};

ScreenScroll.propTypes = {
  desktop: PropTypes.node.isRequired,
  mobile: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultScreen: PropTypes.string,
};

export default ScreenScroll;
