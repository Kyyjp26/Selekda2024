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
import BannerAdmin from "./view/BannerAdmin";
import AddBanner from "./view/AddBanner";
import EditBanner from "./view/EditBanner";
import PortofolioAdmin from "./view/PortofolioAdmin";
import AddPortofolio from "./view/AddPortofolio";
import EditPortofolio from "./view/EditPortofolio";
import BlogAdmin from "./view/BlogAdmin";
import AddBlog from "./view/AddBlog";
import EditBlog from "./view/EditBlog";

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
        path: "/portofolio",
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
      {
        path: "/dashboard/banner",
        element: <BannerAdmin />,
      },
      {
        path: "/dashboard/add-banner",
        element: <AddBanner />,
      },
      {
        path: "/dashboard/edit-banner/:id",
        element: <EditBanner />,
      },
      {
        path: "/dashboard/portofolio",
        element: <PortofolioAdmin />,
      },
      {
        path: "/dashboard/add-portofolio",
        element: <AddPortofolio />,
      },
      {
        path: "/dashboard/edit-portofolio/:id",
        element: <EditPortofolio />,
      },
      {
        path: "/dashboard/blog",
        element: <BlogAdmin />,
      },
      {
        path: "/dashboard/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/dashboard/edit-blog/:id",
        element: <EditBlog />,
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
