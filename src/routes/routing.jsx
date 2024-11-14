import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout.jsx";
import Logout from "../pages/Logout/index.jsx";
import Offers from "../pages/Offers/index.jsx";
import Login from "../pages/Auth/Login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/Offers", element: <Offers /> },
      { path: "/dashboard/Logout", element: <Logout /> },
      { path: "/dashboard/login", element: <Login /> },

  
    ],
  },
]);
