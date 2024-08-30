import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";
import Home from "./view/Home";
import Register from "./view/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
