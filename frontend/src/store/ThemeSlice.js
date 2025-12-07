import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("chatify-theme") || "light";

const themeSlice = createSlice(
  {
    name: "theme",
    initialState: { theme: initialTheme },
    reducers: {
      toggleTheme: (state) => {
        state.theme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("chatify-theme", state.theme);
      },

      setTheme: (state, action) => {
        state.theme = action.payload;
        localStorage.setItem("chatify-theme",action.payload);
      },
    }
  }
);

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;