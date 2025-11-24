import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice.js";
import userReducer from "./UserSlice.js";
import messagesReducer from "./messagesSlice.js";

const store = configureStore({
  reducer: {
    auth     : authReducer,
    users    : userReducer,
    messages : messagesReducer,
  },
});

export default store;