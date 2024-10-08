import {combineReducers} from '@reduxjs/toolkit';
import dummy from '../slices/dummy';
import AuthSlice from '../slices/AuthSlice';

const rootReducer = combineReducers({
  addSlice: dummy,
  AuthSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
