import { createReducer } from '@reduxjs/toolkit';
import { TOGGLE_TRAY, SET_THEME } from './ui-action';
import { THEME_DEFAULT } from '../../constants/theme';

export const initialUiState = {
  tray: false,
  theme: THEME_DEFAULT,
};

// eslint-disable-next-line default-param-last
const toggleTray = (state = initialUiState, action) => {
  switch (action.type) {
    case TOGGLE_TRAY:
      return { ...state, tray: action.isVisible };

    default:
      return state;
  }
};

// eslint-disable-next-line default-param-last
const setTheme = (state = initialUiState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme };

    default:
      return state;
  }
};

export const uiReducer = createReducer(initialUiState, {
  [TOGGLE_TRAY]: toggleTray,
  [SET_THEME]: setTheme,
});
