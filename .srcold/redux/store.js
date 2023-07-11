import { configureStore } from '@reduxjs/toolkit';
import Isloginreducer from './slices/auth';

 export const store = configureStore({
  reducer: {
    islogin: Isloginreducer,
  },
});

