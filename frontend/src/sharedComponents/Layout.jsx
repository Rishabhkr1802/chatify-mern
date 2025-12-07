import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getSocket } from "../utils/Socket";
import Header from "./Header";
import Sidebar from "../sharedComponents/Sidebar";

function Layout() {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const socket = getSocket();
    if (!socket) return;

    socket.on("getOnlineUsers", (usersList) => { // Listen from backend
      setOnlineUsers(usersList);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, []);

  return (
    <main className="h-screen w-full bg-base-400 overflow-hidden flex flex-col">
      <Header />

      <div className="flex flex-1 w-full overflow-hidden">
        <div className="">
          <Sidebar onlineUsers={onlineUsers} />
        </div>

        <div className="flex-1 p-3 h-full overflow-auto">
          <Outlet context={{onlineUsers}} />
        </div>
      </div>
    </main>
  );
}

export default Layout;
