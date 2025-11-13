import { sendMessageDao } from "../dao/message.dao.js";

export function sendMessageService(myID, userToChatID, { text, imageUrl }) {
  try {
    const messageFormat = {
      senderID    : myID,
      receiverID  : userToChatID,
      text        : text,
      image       : imageUrl || '',
    }
    const message = sendMessageDao(messageFormat);
    return message;
  } catch (error) {
    console.log("Error occur during sendMessageService : ", error);
  }
}