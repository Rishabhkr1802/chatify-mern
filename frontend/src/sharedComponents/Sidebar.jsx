import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import SidebarCard from "./SidebarCard";
import { useEffect } from "react";
import { getAllUserThunk } from "../store/UserSlice";

function Sidebar() {
  const dispatch  = useDispatch();
  const { users } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch])

  return (
    <aside className="p-3 min-w-[300px] shadow h-full overflow-auto">
      <Search />
      <div className="py-4 flex flex-col gap-3">
        {users.map((user) => <SidebarCard key={user._id} user={user} />)}
      </div>
    </aside>
  )
}

export default Sidebar;