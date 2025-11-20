import { getMessagesService, sendMessageService } from "../services/message.service.js";
import { getReceiverSocketId, io } from "../socket/socketio.js";
import User from "../models/User.model.js";

export async function getAllMessages(req, res) {
  try {
    const { id: receiverID } = req.params;
    const senderID = req.user?._id;
    const message = await getMessagesService(senderID, receiverID);
    return res.status(200).json({ success: true, data: message, message: "message fetched sucessfully" });

  } catch (error) {
    console.log("Error occur during getAllMessages controller: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function sendMessage(req, res) {
  try {
    const { id: userToChatID }  = req.params;
    const { text, image }       = req.body;
    const myID                  = req.user?._id;

    if (!text && !image) {
      return res.status(400).json({ message: "Text or image is required." });
    }
    if (myID.equals(userToChatID)) {
      return res.status(400).json({ message: "Cannot send messages to yourself." });
    }
    const receiverExists = await User.exists({ _id: userToChatID });
    if (!receiverExists) {
      return res.status(404).json({ message: "Receiver not found." });
    }

    let imageUrl;
    if (image) {
      const uploadedResponse = cloudinary.uploader.upload(image);
      imageUrl = uploadedResponse?.secure_url;
    }
    const sendMessage = sendMessageService(myID, userToChatID, { text, imageUrl });

    const receiverSocketId = getReceiverSocketId(userToChatID);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

    if (sendMessage) {
      return res.status(200).json({ success: true, message: "send messages successfully" });
    } else {
      res.status(422).json({ success: false, message: "Something went wrong" });
    }

  } catch (error) {
    console.log("Error occur during sendMessage controller: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}