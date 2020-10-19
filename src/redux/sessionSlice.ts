import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import UserService from 'services/userService';
import { RootState, AppThunk } from './rootReducer';

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
    const data = await UserService.login(userName, '123456');
    callback?.onSuccess?.(data);
    dispatch(setCurrentUser(data));
  } catch (e) {
    console.log('error', e);
  }
};

/* ----DEFINE_SELECTOR----*/

export const selectSessionData = (state: RootState): SessionData =>
  state.session;

export const selectUserName = createSelector(
  selectSessionData,
  (sessionData: SessionData) => sessionData?.user?.name,
);
