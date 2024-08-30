import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";
import Home from "./view/Home";
import Register from "./view/Register";
import DefaultLayout from "./components/DefaultLayout";
import Blog from "./view/Blog";
import BlogDetail from "./view/BlogDetail";
import PortofolioList from "./view/PortofolioList";
import Dashboard from "./view/Dashboard";
import DashboardLayout from "./components/DashBoardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-detail",
        element: <BlogDetail />,
      },
      {
        path: "/portofolio-list",
        element: <PortofolioList />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
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
