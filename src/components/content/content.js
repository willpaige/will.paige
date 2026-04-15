'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
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

function Content({
  className, children, noHero = false, noBackground = false,
}) {
  const activeTheme = useSelector(getActiveTheme);
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
          <Image src="/images/kitty_cat.png" alt="Cat hiding" width={100} height={100} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default Content;
