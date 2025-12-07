import { useSelector } from "react-redux";
import Container from "../sharedComponents/Container";
import NoConversationPlaceholder from "../sharedComponents/NotFound/NoConversationFound";

function Dashboard() {
  const { user }  = useSelector(state => state.auth);
  const firstName = user.name.split(" ")[0];
  return (
    <Container heading={`Welcome ${firstName} to chatify App`}>
      <div className="flex items-center justify-center h-full w-full">
        <NoConversationPlaceholder />
      </div>
    </Container>
  )
}

export default Dashboard;