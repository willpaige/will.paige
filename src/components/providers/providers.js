'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import { rootReducer } from '../../state/index';
import { initialUiState } from '../../state/ui/ui-reducer';
import { initialNavigationState } from '../../state/navigation/navigation-reducer';

const createStore = () => reduxCreateStore(
  rootReducer,
  {
    ui: { ...initialUiState },
    navigation: { ...initialNavigationState },
  },
);

export default function Providers({ children }) {
  return <Provider store={createStore()}>{children}</Provider>;
}
