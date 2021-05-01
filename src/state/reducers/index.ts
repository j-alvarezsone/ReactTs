import { combineReducers } from 'redux';
import { repositoriesReducer } from './respositoriesReducer';

export const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof reducers>;
