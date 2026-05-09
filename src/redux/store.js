/*
  configureStore import kiya

  Kyun?
  Redux store create karne ke liye
*/
import { configureStore } from "@reduxjs/toolkit";

/*
  Auth reducer import kiya
*/
import authReducer from "./slices/authSlice";

/*
  CRUD reducer import kiya
*/
import crudReducer from "./slices/crudSlice";

/*
  Store create kiya
*/
const store = configureStore({
  reducer: {

    /*
      Authentication reducer
    */
    auth: authReducer,

    /*
      CRUD reducer
    */
    crud: crudReducer,
  },
});

export default store;