import { io } from "socket.io-client";

let socket = null;
const socketUrl = import.meta.env.MODE === "development" ? import.meta.env.VITE_SERVER_URL : window.location.origin;

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
