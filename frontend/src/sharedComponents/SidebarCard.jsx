import { Link } from "react-router-dom";
import DummyUser from "../assets/images/DummyUser.jpg";

function SidebarCard({ user }) {
  return (
    <Link to={`/chat/${user._id}`} className="card hover:bg-linear-to-l from-emerald-300 to-indigo-300 border border-base-300 shadow hover:scale-106 p-2">
      <div className="flex items-center gap-2">
        <div className="avatar avatar-online">
          <div className="w-13 rounded-full">
            <img src={user.profilePic || DummyUser} />
          </div>
        </div>
        <div className="w-full">
          <h3>{user.name}</h3>
          <p className="text-base-300 text-green-400 font-bold text-sm">Online</p>
        </div>
      </div>
    </Link>
  )
}

export default SidebarCard;

{/* <div className="avatar avatar-offline">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
  </div>
</div> */}
{/* <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" /> */ }