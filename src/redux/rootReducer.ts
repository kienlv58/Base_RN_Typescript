import { Action, combineReducers } from '@reduxjs/toolkit';

import { ThunkAction } from 'redux-thunk';
import sessionReducer from './sessionSlice';
import globalSlice from './globalSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default rootReducer;
