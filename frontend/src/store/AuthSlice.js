import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user            : null,
  // token           : null,
  isAuthenticated : false,
  isLoggedIn      : false,
  isSignUp        : false,
  isLoading       : false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    updateProfile: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { signup, login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
