import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, addMessage  } from "../store/messagesSlice";
import Container from "../sharedComponents/Container";
import MessageSkelaton from "../sharedComponents/Skelatons/MessageSkelaton";
import { useParams } from "react-router-dom";
import Messages from "../sharedComponents/Messages";
import MessageInput from "../sharedComponents/MessageInput";
import { getSocket } from "../utils/Socket";

function Chat() {
  const { id: userToChatID }    = useParams();
  const dispatch                = useDispatch();
  const { messages, isLoading } = useSelector((state) => state.messages);
  const { user }                = useSelector((state) => state.auth);
  const socket                  = getSocket();

  useEffect(() => {
    dispatch(getMessage(userToChatID));
  }, [dispatch, userToChatID])

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
        if (
            (msg.senderID === userToChatID && msg.receiverID === user._id) ||
            (msg.senderID === user._id && msg.receiverID === userToChatID)
        ) {
            dispatch(addMessage(msg));
        }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [dispatch, userToChatID, user._id]);

  return (
    <>
      <Container heading={"Chat"} footer={<MessageInput />}>
        {isLoading && <MessageSkelaton />}
        {!isLoading && <Messages messages={messages} user={user}/>}
      </Container>
    </>
  )
}

export default Chat;