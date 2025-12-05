import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, sendMessage } from "../store/messagesSlice";
import Container from "../sharedComponents/Container";
import MessageSkelaton from "../sharedComponents/Skelatons/MessageSkelaton";
import { useParams } from "react-router-dom";
import Messages from "../sharedComponents/Messages";
import MessageInput from "../sharedComponents/MessageInput";
import { getSocket } from "../utils/Socket";
// import { setUser } from "../store/UserSlice";
// import { Socket } from "socket.io-client";

function Chat() {
  const { id: userToChatID }    = useParams();
  const dispatch                = useDispatch();
  const { messages, isLoading } = useSelector((state) => state.messages);
  const { user }                = useSelector((state) => state.auth);
  const socket = getSocket();

  useEffect(() => {
    dispatch(getMessage(userToChatID));
  }, [dispatch, userToChatID])

  // useEffect(() => {
  //   return () => {
  //     dispatch(setUser(null));
  //   };
  // }, [dispatch])

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      // Only push message if it belongs to current chat user
      if (
        (msg.senderId === userToChatID && msg.receiverId === user._id) ||
        (msg.senderId === user._id && msg.receiverId === userToChatID)
      ) {
        dispatch(sendMessage(msg));
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