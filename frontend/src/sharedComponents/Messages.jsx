import { useEffect, useRef } from "react";
import DummyUser from "../assets/images/DummyUser.jpg";

function Messages({messages, user}) {
  const scrollToBottom = useRef(null);

  useEffect(() => {
    scrollToBottom.current?.scrollIntoView({ behavior: "smooth", });
  }, [messages]);

  // useEffect(() => {
  //   const lastMsg = messages[messages.length - 1];
  //   if (!lastMsg) return;

  //   const sentByMe = lastMsg.senderId === user._id;
  //   if (!sentByMe) {
  //     scrollToBottom.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messages, user._id]);

  return (
    <>
      {messages.map((msg) => (
        <div key={msg._id} className={`chat ${msg.receiverID === user?._id ? "chat-start" : "chat-end"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={msg.receiverID === user._id ? DummyUser : user.profilePic} alt="user" />
            </div>
          </div>
          <div className="chat-header">
            {/* {msg.senderId} */}
            <time className="chat-footer opacity-50">{new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>
          </div>
          {msg.image && (
            <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
          )}
          <div className="chat-bubble relative">{msg.text}</div>
          <time className="text-xs opacity-50">{'sent'}</time>
        </div>
      ))}
      <div ref={scrollToBottom}></div>
    </>
  )
}

export default Messages;