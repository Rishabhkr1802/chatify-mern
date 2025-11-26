import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice.js";
import userReducer from "./UserSlice.js";
import messagesReducer from "./messagesSlice.js";
import themeReducer from "./ThemeSlice.js";

const store = configureStore({
  reducer: {
    auth     : authReducer,
    users    : userReducer,
    messages : messagesReducer,
    theme    : themeReducer,
  },
});

export default store;