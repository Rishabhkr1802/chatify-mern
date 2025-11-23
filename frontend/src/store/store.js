import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // isAuthenticated: false,
  // isSignup: false,
  // isLoggedin: false,

  // auth: () => { },
  // signUp: () => { },
  // login: () => { },
  reducer: {
    // auth: authReducer,
  },
});


export default store;