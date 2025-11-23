import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuth, signupService, loginService, logoutService } from "../services/api";

const initialState = {
  user            : null,
  isAuthenticated : false,
  isLoggedIn      : false,
  isSignUp        : false,
  isLoading       : false,
  error           : null,
}

export const checkAuthThunk = createAsyncThunk("auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await checkAuth();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "Unauthorized");
    }
  }
);

export const signupThunk = createAsyncThunk("auth/signup",
  async (signupData, thunkAPI) => {
    try {
      const response = await signupService(signupData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "Signup failed");
    }
  }
);

export const loginThunk = createAsyncThunk("auth/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await loginService(loginData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "Login Failed");
    }
  }
);

export const logoutThunk = createAsyncThunk("auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await logoutService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "Logout failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // ----------- CHECK AUTH ----------
    builder
      .addCase(checkAuthThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(checkAuthThunk.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });

    // ----------- SIGNUP ----------
    builder
      .addCase(signupThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isSignUp = true;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ----------- LOGIN ----------
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ----------- LOGOUT ----------
    builder
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoggedIn = false;
        state.isSignUp = false;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
