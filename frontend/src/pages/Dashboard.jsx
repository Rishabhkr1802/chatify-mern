import Container from "../sharedComponents/Container";
import NoConversationPlaceholder from "../sharedComponents/NotFound/NoConversationFound";
// import image1 from "../assets/images/DashboardImage.jpg";
// import image2 from "../assets/images/DashboardImageChat.jpg";

function Dashboard() {
  return (
    <Container heading={"Welcome to Chatify App"}>
      <div className="flex items-center justify-center h-full w-full">
        <NoConversationPlaceholder />
        {/* <img src={image2} alt="image" className="w-200 h-140 " /> */}
      </div>
    </Container>
  )
}

export default Dashboard;