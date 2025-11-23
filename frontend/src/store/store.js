import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice.js";
import userReducer from "./UserSlice.js";

const store = configureStore({
  reducer: {
    auth    : authReducer,
    users   : userReducer,
  },
});

export default store;