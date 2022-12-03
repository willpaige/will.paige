import { combineReducers } from 'redux';
import { uiReducer } from './ui/ui-reducer';
import { navigationReducer } from './navigation/navigation-reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  navigation: navigationReducer,
});
