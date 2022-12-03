import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import { initialUiState } from './ui/ui-reducer';
import { initialNavigationState } from './navigation/navigation-reducer';
import { rootReducer } from './index';

export const mockInitialState = {
  ui: initialUiState,
  navigation: initialNavigationState,
};

const initialState = _.cloneDeep(mockInitialState);

const createStore = () => reduxCreateStore(
  rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function ({ element }) {
  return <Provider store={createStore()}>{element}</Provider>;
}
