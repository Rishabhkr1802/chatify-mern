import { NavLink } from "react-router-dom";
import DummyUser from "../assets/images/DummyUser.jpg";

function SidebarCard({ user }) {
  return (
    <NavLink to={`/chat/${user._id}`} className={({ isActive }) => `card group p-2 hover:bg-linear-to-l from-emerald-300 to-indigo-300 border border-base-300 shadow hover:scale-106 ${isActive ? "bg-zinc-400/30 " : ""}`}>
      <div className="flex items-center gap-2">
        <div className="avatar avatar-online">
          <div className="w-13 rounded-full">
            <img src={user.profilePic || DummyUser} />
          </div>
        </div>
        <div className="w-full hidden sm:block">
          <h3 className="group-hover:text-white">{user.name}</h3>
          <p className="text-base-300 text-green-400 font-bold text-sm group-hover:text-white">Online</p>
        </div>
      </div>
    </NavLink>
  )
}

export default SidebarCard;

{/* <div className="avatar avatar-offline">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
  </div>
</div> */}
{/* <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" /> */ }