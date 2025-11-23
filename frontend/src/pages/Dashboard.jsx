import Container from "../sharedComponents/Container";
// import image1 from "../assets/images/DashboardImage.jpg";
import image2 from "../assets/images/DashboardImageChat.jpg";

function Dashboard() {
  return (
    <Container heading={"Welcome to the user chat application"}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={image2} alt="image" className="w-200 h-140 " />
      </div>
    </Container>
  )
}

export default Dashboard;