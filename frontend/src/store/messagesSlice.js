import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessageService, sendMessageService } from "../services/api";

const initialState = {
  messages  : [],
  isLoading : false,
  error     : false,
}

export const getMessage = createAsyncThunk("message/getMessage",
  async (userToChatID, thunkAPI) => {
    try {
      const response = await getMessageService(userToChatID);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "message not found")
    }
  }
)

export const sendMessage = createAsyncThunk("message/send",
  async (userToChatID, thunkAPI) => {
    try {
      const response = await sendMessageService(userToChatID);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "message not sent")
    }
  }
)

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: (builder) => {
    //get Message
    builder
      .addCase(getMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload.data;
        state.error = null;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

    //Send Message
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
        state.error = null;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default messagesSlice.reducer;