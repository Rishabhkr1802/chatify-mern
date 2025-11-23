import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserService } from "../services/api";

const initialState = {
  users     : [],
  isLoading : false,
  error     : false,
}

export const getAllUserThunk = createAsyncThunk("user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUserService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "User not found")
    }
  }
)

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {

    builder
      .addCase(getAllUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.user;
        state.error = null;
      })
      .addCase(getAllUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default userSlice.reducer;