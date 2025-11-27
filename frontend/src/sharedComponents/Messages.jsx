function Messages({messages, user}) {
  return (
    <>
      {messages.map((msg) => (

        <div key={msg._id} className={`chat ${msg.receiverID === user?._id ? "chat-start" : "chat-end"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={msg.receiverID === user._id ? "" : user.profilePic} alt="user" />
            </div>
          </div>
          <div className="chat-header">
            {msg.senderId}
            <time className="chat-footer opacity-50">{new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>
          </div>
          {msg.image && (
            <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
          )}
          <div className="chat-bubble relative">{msg.text}</div>
          <time className="text-xs opacity-50">{'sent'}</time>
        </div>
      ))}
    </>
  )
}

export default Messages;