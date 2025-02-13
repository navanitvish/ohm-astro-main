import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './language/languageSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
  },
});

export default store;
