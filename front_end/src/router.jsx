import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";
import Home from "./view/Home";
import Register from "./view/Register";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
