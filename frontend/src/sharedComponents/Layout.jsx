import { useDispatch } from "react-redux";
import { logoutThunk } from "../store/AuthSlice";

function Layout() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutThunk());
  }
  return (
    <main className="h-screen w-full bg-radial from-emerald-400/70 to-lime-300">
       <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      {/* <header/> */}
      {/* <div className="columns-2">
        <div className="columnn-3xs">
          fd
        </div>
        <div className="">
            f
        </div>
      </div> */}
    </main>
  )
}

export default Layout;