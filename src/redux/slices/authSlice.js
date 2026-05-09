/*
  createSlice import kiya
*/
import { createSlice } from "@reduxjs/toolkit";

/*
  Initial state banayi
*/
const initialState = {

  /*
    Login status store karega
  */
  isAuthenticated: false,
};

/*
  Slice create ki
*/
const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    /*
      Login action
    */
    login: (state) => {
      state.isAuthenticated = true;
    },

    /*
      Logout action
    */
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;