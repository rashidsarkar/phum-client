import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  // {
  //   path: "/faculty",
  //   element: <App />,
  //   children: adminRoutes,
  // },
  // {
  //   path: "/student",
  //   element: <App />,
  //   children: adminRoutes,
  // },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
