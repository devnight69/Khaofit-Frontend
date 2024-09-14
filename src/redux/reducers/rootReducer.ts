import {combineReducers} from '@reduxjs/toolkit';
import dummy from '../slices/dummy';

const rootReducer = combineReducers({
  addSlice: dummy,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
