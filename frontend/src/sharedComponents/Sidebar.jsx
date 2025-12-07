import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserThunk } from "../store/UserSlice";
import Search from "./Search";
import SidebarCard from "./SidebarCard";
import NoChatsFound from "./NotFound/NoChatsFound";
import UsersLoadingSkeleton from "./Skelatons/UserLoadingSkelaton";

function Sidebar({onlineUsers}) {
  const dispatch                    = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { users, isLoading }        = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch])

  const filteredUsers = users?.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) );

  return (
    <aside className="p-3 max-w-[100px] sm:max-w-[300px] shadow h-full overflow-auto">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="py-4 flex flex-col gap-3">
        { isLoading && <UsersLoadingSkeleton /> }
        { users && filteredUsers.length === 0 && <NoChatsFound /> }
        { filteredUsers.map((user) => <SidebarCard key={user._id} user={user} onlineUsers={onlineUsers} />) }
      </div>
    </aside>
  )
}

export default Sidebar;