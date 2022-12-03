import {
  theme3,
  theme4,
  theme2,
  oldLavender,
  theme1,
  theme3Color,
  theme4Color,
  theme2Color,
  oldLavenderColor,
  theme1Color,
} from '../scss/theme.module.scss';

export const colours = {
  TEA_GREEN: 'rgba(209, 240, 177, 1)',
  THEME_2: 'rgba(182, 203, 158, 1)',
  THEME_3: 'rgba(146, 180, 167, 1)',
  THEME_4: 'rgba(250, 163, 129, 1)',
  OLD_LAVENDER: 'rgba(129, 102, 122, 1)',
};

export const themeMap = {
  THEME_1: 'theme-1',
  THEME_2: 'theme-2',
  THEME_3: 'theme-3',
  THEME_4: 'theme-4',
  OLD_LAVENDER: 'old-lavender',
  NO_THEME: 'no-theme',
};

export const themeBackgroundStyles = {
  [themeMap.THEME_1]: theme1,
  [themeMap.THEME_2]: theme2,
  [themeMap.THEME_3]: theme3,
  [themeMap.THEME_4]: theme4,
  [themeMap.OLD_LAVENDER]: oldLavender,
};

export const themeColorStyles = {
  [themeMap.THEME_1]: theme1Color,
  [themeMap.THEME_2]: theme2Color,
  [themeMap.THEME_3]: theme3Color,
  [themeMap.THEME_4]: theme4Color,
  [themeMap.OLD_LAVENDER]: oldLavenderColor,
};

export const THEME_DEFAULT = themeMap.THEME_1;
