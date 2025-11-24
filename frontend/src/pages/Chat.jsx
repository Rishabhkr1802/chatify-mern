import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../store/messagesSlice";
import Container from "../sharedComponents/Container";
import MessageSkelaton from "../sharedComponents/Skelatons/MessageSkelaton";
import { useParams } from "react-router-dom";
import Messages from "../sharedComponents/Messages";

function Chat() {
  const { id: userToChatID }  = useParams();
  const dispatch              = useDispatch();
  const { messages, isLoading }         = useSelector((state) => state.messages);
  console.log(messages)

  useEffect(() => {
    dispatch(getMessage(userToChatID));
  }, [dispatch, userToChatID])

  return (
    <Container heading={"Chat"}>
      {/* { isLoading && <MessageSkelaton />} */}
      {/* {(messages.length > 0 && !isLoading ) ? <Messages message={messages}/> : <MessageSkelaton /> } */}
      <Messages messages={messages}/>
    </Container>
  )
}

export default Chat;