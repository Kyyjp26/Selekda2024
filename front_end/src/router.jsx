import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
