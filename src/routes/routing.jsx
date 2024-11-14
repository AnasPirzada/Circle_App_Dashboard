import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import Logout from '../pages/Logout/index.jsx';
import Offers from '../pages/Offers/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />, // Display the login screen at the root
  },

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'Offers', element: <Offers /> },
      { path: 'Logout', element: <Logout /> },
      // Add more nested routes as needed
    ],
  },
]);
