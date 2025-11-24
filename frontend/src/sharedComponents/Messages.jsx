function Messages({ messages }) {
  console.log(messages)
  return (
    <>
      {/* <div className="flex-1 px-6 overflow-y-auto py-8">
        {messages &&  messages.length > 0  ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble relative ${msg.senderId === authUser._id
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 text-slate-200"
                    }`}
                >
                  {msg.image && (
                    <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
                  )}
                  {msg.text && <p className="mt-2">{msg.text}</p>}
                  <p className="text-xs mt-1 opacity-75 flex items-center gap-1">
                    {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        ) : "isMessagesLoading" ? (
          ""
        ) : (
          "fs"
        )}
      </div> */}

      {messages.map((msg) => (
        <div key={msg._id} className={`chat ${msg.senderId ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" alt="Tailwind CSS chat bubble component" />
            </div>
          </div>
          <div className="chat-header">
            {msg.senderId}
            <time className="text-xs opacity-50">{msg.createdAt}</time>
          </div>
          <div className="chat-bubble">{msg.text}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      ))}
    </>
  )
}

export default Messages;