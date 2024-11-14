// src/routing/routing.jsx
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import Login from '../pages/Auth/Login.jsx';
import Logout from '../pages/Logout/index.jsx';
import Active from '../pages/Offers/Active.jsx';
import Complete from '../pages/Offers/Complete.jsx';
import Offers from '../pages/Offers/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'Offers',
        element: <Offers />,
        children: [
          { path: 'Active', element: <Active /> },
          { path: 'Complete', element: <Complete /> },
        ],
      },
      { path: 'Logout', element: <Logout /> },
    ],
  },
]);
