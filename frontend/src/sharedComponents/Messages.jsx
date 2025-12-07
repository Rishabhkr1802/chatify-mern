import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import DummyUser from "../assets/images/DummyUser.jpg";

function Messages({messages, user}) {
  const scrollToBottom = useRef(null);
  const { selectedUser } = useSelector(state => state.users);

  useEffect(() => {
    if (!messages.length) return;

    const lastMsg = messages[messages.length - 1];
    if (!lastMsg) return;
    const sentByMe = lastMsg.senderID === user._id;

    scrollToBottom.current?.scrollIntoView({
      behavior: sentByMe ? "auto" : "smooth",
    });
  }, [messages, user._id]);

  return (
    <>
      {messages.map((msg) => (
        <div key={msg._id} className={`chat ${msg.senderID === user?._id ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={msg.senderID === user._id ? user.profilePic : selectedUser.profilePic || DummyUser} alt="user" />
            </div>
          </div>

          <div className="chat-header flex flex-col items-end gap-2">
            <time className="chat-footer opacity-50">{new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>
            {msg.image && (
              <img src={msg.image} alt="Shared" className="rounded-lg h-30 object-cover cursor-pointer mb-1" />
            )}
          </div>
          
          {msg.text && ( <div className={`chat-bubble ${msg.senderID === user?._id ? "bg-primary text-primary-content" : "bg-secondary text-secondary-content"} relative`}>{msg.text}</div> )}
          {msg.senderID === user._id &&  <time className="text-xs opacity-50">{'sent'}</time>}
        </div>
      ))}
      <div ref={scrollToBottom}></div>
    </>
  )
}

export default Messages;