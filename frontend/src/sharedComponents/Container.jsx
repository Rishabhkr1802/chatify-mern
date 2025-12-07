import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import DummyUser from "../assets/images/DummyUser.jpg";

function Container({ heading, children, footer }) {
  const { onlineUsers }     = useOutletContext();
  // const navigate            = useNavigate();
  const { selectedUser }    = useSelector(state => state.users);
  const isOnline            = onlineUsers.includes(selectedUser?._id);

  // function redirectToProfile(id) {
  //   navigate(`/profile/${id}`);
  // }
  
  return (
    <article className="flex flex-col gap-3 h-full relative">
      <nav>
        { selectedUser && window.location.pathname.includes("/chat") ? (
          <div className="flex justify-start items-center gap-3 bg-base-300 shadow-md px-1 py-1">
            <div className={`avatar cursor-pointer ${isOnline ? "avatar-online" : "avatar-offline"}`}>
              <div className="w-13 rounded-full">
                  <img src={selectedUser.profilePic || DummyUser} />
                </div>
            </div>
            <div className="w-full hidden cursor-pointer sm:block">
              <h3 className="group-hover:text-white">{selectedUser.name}</h3>
              <p className="text-green-400 font-bold text-sm group-hover:text-white">{isOnline ? "Online" : "Offline"}</p>
            </div>
          </div>
        ) : <h2 className="bg-linear-to-r from-emerald-400 to-indigo- bg-clip-text text-transparent font-extrabold font-inconsolata text-3xl">{heading}</h2>}
      </nav>

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      <div className="sticky bottom-0 left-0 w-full">
        {footer}
      </div>
    </article>
  )
}

export default Container;