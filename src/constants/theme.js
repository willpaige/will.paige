import {
  theme3,
  theme4,
  theme2,
  theme5,
  theme1,
  theme3Color,
  theme4Color,
  theme2Color,
  theme5Color,
  theme1Color,
} from '../scss/theme.module.scss';

export const colours = {
  THEME_1: 'rgba(209, 240, 177, 1)',
  THEME_2: 'rgba(182, 203, 158, 1)',
  THEME_3: 'rgba(146, 180, 167, 1)',
  THEME_4: 'rgba(250, 163, 129, 1)',
  THEME_5: 'rgba(129, 102, 122, 1)',
};

export const themeMap = {
  THEME_1: 'theme-1',
  THEME_2: 'theme-2',
  THEME_3: 'theme-3',
  THEME_4: 'theme-4',
  THEME_5: 'theme-5',
};

export const themeBackgroundStyles = {
  [themeMap.THEME_1]: theme1,
  [themeMap.THEME_2]: theme2,
  [themeMap.THEME_3]: theme3,
  [themeMap.THEME_4]: theme4,
  [themeMap.THEME_5]: theme5,
};

export const themeColorStyles = {
  [themeMap.THEME_1]: theme1Color,
  [themeMap.THEME_2]: theme2Color,
  [themeMap.THEME_3]: theme3Color,
  [themeMap.THEME_4]: theme4Color,
  [themeMap.THEME_5]: theme5Color,
};

export const THEME_DEFAULT = themeMap.THEME_1;
