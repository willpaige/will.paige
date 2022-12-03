import { createReducer } from '@reduxjs/toolkit';
import { SET_ACTIVE_PAGE } from './navigation-action';

export const initialNavigationState = {
  activePage: '/',
};

// eslint-disable-next-line default-param-last
const setActivePage = (state = initialNavigationState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: action.activePage };

    default:
      return state;
  }
};

export const navigationReducer = createReducer(initialNavigationState, {
  [SET_ACTIVE_PAGE]: setActivePage,
});
