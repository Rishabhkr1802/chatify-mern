import http       from "http";
import express    from "express";
import { Server } from "socket.io";

const app     = express();
const server  = http.createServer(app);
const io      = new Server(server, {
  cors: {
    origin  : ["http://localhost:3000"],
    methods : ['GET', 'POST'],
    pingTimeout: 60000,
  }
});
const userSocketMap = {}; // {userId: socketId}

export function getReceiverSocketId(receiverId){
  return userSocketMap[receiverId];
}

io.on("connection", (socket) => {
  console.log("user socket connected", socket.id);

  const userId = socket.handshake.query.userId;
	if (userId && userId !== "undefined") userSocketMap[userId] = socket.id;

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("sendMessage", ({ senderID, receiverID, text,image }) => {
    const receiverSocketId = userSocketMap[receiverID];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receiveMessage", {
        senderID,
        text,
        image
      });
    }
  });

  socket.on("disconnect", () => {
  for (let key in userSocketMap) {
    if (userSocketMap[key] === socket.id) {
      delete userSocketMap[key];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
      console.log("user socket disconnected", socket.id);
    }
  }
});
});

export { app, io, server};