// import { createSlice } from "@reduxjs/toolkit";

// const savedUser = JSON.parse(localStorage.getItem("user")) || null;

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: savedUser,
//     isAuthenticated: !!savedUser,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       localStorage.setItem("user", JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("user");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true, // 🟡 important to prevent flicker
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
