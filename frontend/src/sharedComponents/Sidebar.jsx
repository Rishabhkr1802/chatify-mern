import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserThunk } from "../store/UserSlice";
import Search from "./Search";
import SidebarCard from "./SidebarCard";
import NoChatsFound from "./NotFound/NoChatsFound";
import UsersLoadingSkeleton from "./Skelatons/UserLoadingSkelaton";

function Sidebar() {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch])

  return (
    <aside className="p-3 max-w-[100px] sm:max-w-[300px] shadow h-full overflow-auto">
      <Search />
      <div className="py-4 flex flex-col gap-3">
        { isLoading && <UsersLoadingSkeleton /> }
        { users && users.length === 0 && <NoChatsFound /> }
        { users.map((user) => <SidebarCard key={user._id} user={user} />) }
      </div>
    </aside>
  )
}

export default Sidebar;