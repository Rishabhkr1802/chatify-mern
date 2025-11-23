import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { GuestRoute } from "./ProtectedRoute";

const Layout          = lazy( () => import("../sharedComponents/Layout"));
const Login           = lazy( () => import("../pages/Login"));
const Loader          = lazy( () => import("../sharedComponents/Loader"));
const Register        = lazy( () => import("../pages/Register"));
const Dashboard       = lazy( () => import("../pages/Dashboard"));
const ProtectedRoute  = lazy( () => import("./ProtectedRoute"));

const routes = createBrowserRouter([
    { element: <GuestRoute />, children: [
      { path: "/login",     element: <Login /> },
      { path: "/register",  element: <Register /> },
    ],
  },
    { path: "/", element: <ProtectedRoute />, children: [
      { path: "/", element: <Layout sidebar={true} />, children: [
          { index: true, element: <Dashboard /> },
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