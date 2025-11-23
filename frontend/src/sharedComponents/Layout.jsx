import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "../sharedComponents/Sidebar";

function Layout() {
  return (
    <main className="h-screen w-full bg-base-400 overflow-hidden flex flex-col">
      <Header />

      <div className="flex flex-1 w-full overflow-hidden">
        <div className="">
          <Sidebar />
        </div>

        <div className="flex-1 p-3 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Layout;

// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "../sharedComponents/Sidebar";

// function Layout() {
//   return (
//     <main className="min-h-screen w-full bg-base-400 overflow-auto scrollbar-hide relative">
//       <Header />
//       <div className="flex h-full w-full items-start">
//         <div className="min-h-full"><Sidebar /></div>
//         <div className="w-full p-3 min-h-full bg-red-300"><Outlet /></div>
//       </div>
//     </main>
//   )
// }

// export default Layout;
