import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState, AppThunk } from './rootReducer';

/* ----DEFINE_ACTION_REDUCER----*/

interface GlobalData {
  isLoading: boolean;
}

const initialState: GlobalData = {
  isLoading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { showLoading } = globalSlice.actions;

export default globalSlice.reducer;

/* ----DEFINE_SELECTOR----*/

export const selectGlobalData = (state: RootState): GlobalData => state.global;

export const selectIsLoading = createSelector(
  selectGlobalData,
  (sessionData: GlobalData) => sessionData.isLoading,
);
