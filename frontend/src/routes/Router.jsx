import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { GuestRoute } from "./ProtectedRoute";

const ProtectedRoute  = lazy( () => import("./ProtectedRoute"));
const Layout          = lazy( () => import("../sharedComponents/Layout"));
const Login           = lazy( () => import("../pages/Login"));
const Loader          = lazy( () => import("../sharedComponents/Loader"));
const Register        = lazy( () => import("../pages/Register"));
const Dashboard       = lazy( () => import("../pages/Dashboard"));
const Settings        = lazy( () => import("../pages/Setting"));
const Themes          = lazy( () => import("../pages/Theme"));
const UpdateProfile   = lazy( () => import("../pages/Profile"));
const Chat            = lazy( () => import("../pages/Chat"));

const routes = createBrowserRouter([
    { element: <GuestRoute />, children: [
      { path: "/login",     element: <Login /> },
      { path: "/register",  element: <Register /> },
    ],
  },
    { path: "/", element: <ProtectedRoute />, children: [
      { path: "/", element: <Layout sidebar={true} />, children: [
          { index: true,       element: <Dashboard /> },
          { path: "/chat/:id", element: <Chat /> },
          { path: "/setting",  element: <Settings /> },
          { path: "/themes",   element: <Themes /> },
          { path: "/profile",  element: <UpdateProfile /> },
        ]
      }
    ]
  },
  { path: "*", element: "404 Not Found"},
]);

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default Router;