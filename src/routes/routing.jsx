import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import Logout from '../pages/Logout/index.jsx';
import Offers from '../pages/Offers/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />, // Use DashboardLayout directly if needed as the main layout
    children: [
      { path: '/dashboard/Offers', element: <Offers /> },
      { path: '/dashboard/Logout', element: <Logout /> },
      // Add more nested routes as needed
    ],
  },
]);
