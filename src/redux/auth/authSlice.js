// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, token } = action.payload;

      console.log("this is the email",email);
      console.log("this is the token",token);
      state.user = { email };
      state.token = token;
      state.isAuthenticated = true;
      // localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
