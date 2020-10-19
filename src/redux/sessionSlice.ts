import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import UserService from 'services/userService';
import { RootState, AppThunk } from './rootReducer';
import { showLoading } from './globalSlice';

/* ----DEFINE_ACTION_REDUCER----*/
type User = {
  name: string;
  age: number;
};

interface SessionData {
  user: User | null;
}

const initialState: SessionData = {
  user: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setCurrentUser, logout } = sessionSlice.actions;

export default sessionSlice.reducer;

/* ----DEFINE_THUNK_FUNCTION----*/

export const fetchUserInfo = (
  userName: string,
  callback?: CallbackType,
): AppThunk => async (dispatch) => {
  try {
    dispatch(showLoading({ isLoading: true }));
    const data = await UserService.getUser(userName);
    callback?.onSuccess?.(data);
    dispatch(setCurrentUser(data));
  } catch (e) {
    console.log('error', e);
  } finally {
    setTimeout(() => {
      dispatch(showLoading({ isLoading: false }));
    }, 2000);
  }
};

/* ----DEFINE_SELECTOR----*/

export const selectSessionData = (state: RootState): SessionData =>
  state.session;

export const selectUserName = createSelector(
  selectSessionData,
  (sessionData: SessionData) => sessionData?.user?.name,
);
