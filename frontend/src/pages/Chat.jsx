import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../store/messagesSlice";
import Container from "../sharedComponents/Container";
import MessageSkelaton from "../sharedComponents/Skelatons/MessageSkelaton";
import { useParams } from "react-router-dom";
import Messages from "../sharedComponents/Messages";
import MessageInput from "../sharedComponents/MessageInput";

function Chat() {
  const { id: userToChatID }    = useParams();
  const dispatch                = useDispatch();
  const { isLoading } = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getMessage(userToChatID));
  }, [dispatch, userToChatID])

  return (
    <>
      <Container heading={"Chat"} footer={<MessageInput />}>
        {isLoading && <MessageSkelaton />}
        {!isLoading && <Messages />}
      </Container>
    </>
  )
}

export default Chat;