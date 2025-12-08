import { io } from "socket.io-client";

let socket = null;
const socketUrl = import.meta.env.MODE === "development" ? "http://localhost:5000" : "https://chatify-mern-faxx.onrender.com";

export function connectSocket(userId) {
  if (!socket) {
    socket = io(socketUrl, {
      query: { userId },
      transports: ["websocket"],
      withCredentials: true
    });
  }
  return socket;
};

export const getSocket = () => socket;
