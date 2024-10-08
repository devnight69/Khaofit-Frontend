import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {produce} from 'immer';

const initialState = {
  token: null,
  refreshToken: null,
  user: null,
  txnId: null,
  newUser: true,
  mobileNumber: null,
  otpValue: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthSlice(state, action: PayloadAction<any>) {
      const {
        token,
        refreshToken,
        user,
        txnId,
        newUser,
        mobileNumber,
        otpValue,
      } = action.payload;
      return produce(state, draftState => {
        if (token !== undefined) {
          draftState.token = token;
        }
        if (refreshToken !== undefined) {
          draftState.refreshToken = refreshToken;
        }
        if (user !== undefined) {
          draftState.user = user;
        }
        if (txnId !== undefined) {
          draftState.txnId = txnId;
        }
        if (newUser !== undefined) {
          draftState.newUser = newUser;
        }
        if (mobileNumber !== undefined) {
          draftState.mobileNumber = mobileNumber;
        }
        if (otpValue !== undefined) {
          draftState.otpValue = otpValue;
        }
      });
    },
    resetAuthState(state) {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      state.txnId = null;
      state.newUser = true;
      state.mobileNumber = null;
      state.otpValue = null;
    },
  },
});

export const {setAuthSlice, resetAuthState} = authSlice.actions;
export default authSlice.reducer;
