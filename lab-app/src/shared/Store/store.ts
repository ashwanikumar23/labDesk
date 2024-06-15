import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import authReducer from './signInSlice';
import SelectIdReducer from './selectIdSlice'
import newIdReducer from  './newIdSlice'

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
    seletedId:SelectIdReducer,
    newId :newIdReducer
    
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




