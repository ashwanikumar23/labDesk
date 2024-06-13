import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import authReducer from './signInSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




