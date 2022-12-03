import {
  theme3,
  theme4,
  laurelGreen,
  oldLavender,
  teaGreen,
  theme3Color,
  theme4Color,
  laurelGreenColor,
  oldLavenderColor,
  teaGreenColor,
} from '../scss/theme.module.scss';

export const colours = {
  TEA_GREEN: 'rgba(209, 240, 177, 1)',
  LAUREL_GREEN: 'rgba(182, 203, 158, 1)',
  THEME_3: 'rgba(146, 180, 167, 1)',
  THEME_4: 'rgba(250, 163, 129, 1)',
  OLD_LAVENDER: 'rgba(129, 102, 122, 1)',
};

export const themeMap = {
  TEA_GREEN: 'tea-green',
  LAUREL_GREEN: 'laurel-green',
  THEME_3: 'theme-3',
  THEME_4: 'theme-4',
  OLD_LAVENDER: 'old-lavender',
  NO_THEME: 'no-theme',
};

export const themeBackgroundStyles = {
  [themeMap.TEA_GREEN]: teaGreen,
  [themeMap.LAUREL_GREEN]: laurelGreen,
  [themeMap.THEME_3]: theme3,
  [themeMap.THEME_4]: theme4,
  [themeMap.OLD_LAVENDER]: oldLavender,
};

export const themeColorStyles = {
  [themeMap.TEA_GREEN]: teaGreenColor,
  [themeMap.LAUREL_GREEN]: laurelGreenColor,
  [themeMap.THEME_3]: theme3Color,
  [themeMap.THEME_4]: theme4Color,
  [themeMap.OLD_LAVENDER]: oldLavenderColor,
};

export const THEME_DEFAULT = themeMap.TEA_GREEN;
