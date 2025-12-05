import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessageService, sendMessageService } from "../services/api";
import { getSocket } from "../utils/Socket";

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
  async ({ id, mess }, thunkAPI) => {
    try {
      const response = await sendMessageService(id, mess);
      // return response.data;
      
      const newMessage =  {
        _id: Date.now(),
        text: mess.text || "",
        image: mess.image || null,
        senderId: thunkAPI.getState().auth.user._id,
        receiverID: id,
        createdAt: new Date().toISOString()
      };
      const socket = getSocket();
      if (socket) {
        socket.emit("sendMessage", newMessage);
      }

      return newMessage;
      // const savedMessage = response.data.data;

      // const user = thunkAPI.getState().auth.user;

      // // Create a REAL message object
      // const newMessage = {
      //   ...savedMessage,
      //   senderId: user._id,
      //   receiverId: id,
      // };

      // REAL-TIME SOCKET EMIT
      // const socket = getSocket();
      // if (socket) {
      //   socket.emit("sendMessage", newMessage);
      // }

      // return newMessage;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "message not sent")
    }
  }
)

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },

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
        state.messages.push(action.payload);
        state.error = null;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default messagesSlice.reducer;