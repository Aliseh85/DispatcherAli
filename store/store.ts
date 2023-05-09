import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../features/AuthSlice';

const store = configureStore({
  reducer: {
    authslice: AuthSlice,
  }});
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;