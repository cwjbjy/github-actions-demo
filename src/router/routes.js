import { lazy } from "react";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

export default routes;
