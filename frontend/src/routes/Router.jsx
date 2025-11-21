import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Layout    = lazy( () => import("../sharedComponents/Layout"));
const Login     = lazy( () => import("../pages/Login"));
const Loader    = lazy( () => import("../sharedComponents/Loader"));
const Register  = lazy( () => import("../pages/Register"));

const routes = createBrowserRouter([
    { path: "/login",     element: <Login /> },
    { path: "/register",  element: <Register /> },
    { path: "/",          element: <Layout sidebar={true} />, children: [
      { index: true , element: <Dashboard />}
    ]},
]);

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default Router;