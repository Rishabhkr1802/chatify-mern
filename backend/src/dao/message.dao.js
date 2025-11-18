import mongoose from "mongoose";
import Message from "../models/Message.model.js";

export async function sendMessageDao(messageInfo) {
  try {
    if (!messageInfo) return;
    const messageDetails = {
      senderID    : messageInfo?.senderID,
      receiverID  : messageInfo?.receiverID,
      text        : messageInfo?.text,
      image       : messageInfo?.image || '',
    }
    // const message      = await mongoose.create(messageDetails);
    // const savedMessage = await message.save();
    const newMessage = new Message(messageDetails);
    await newMessage.save();
    return newMessage;
  } catch (error) {
    console.log("Error occur during sendMessageDao : ", error);
  }
}

export async function getMessagesDao(senderID, receiverID) {
  try {
    const messages = await find({
      $or: [
        { senderID: receiverID, receiverID: senderID },
        { senderID: senderID, receiverID: receiverID },
      ]
    });
    return messages;
  } catch (error) {
    console.log("Error occur during getMessagesDao : ", error);
  }
}