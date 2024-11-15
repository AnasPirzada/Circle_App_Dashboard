// src/routing/routing.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import Login from '../pages/Auth/Login.jsx';
import Logout from '../pages/Logout/index.jsx';
import Active from '../pages/Offers/Active.jsx';
import Complete from '../pages/Offers/Complete.jsx';
import OfferDetails from '../pages/Offers/OfferDetails.jsx';
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
        path: '', // This matches "/dashboard" without a sub-route
        element: <Navigate to='/dashboard/Offers/Active' replace />,
      },
      {
        path: 'Offers/Active',
        element: <Active />,
      },
      {
        path: 'Offers/:id', // Make sure the case here matches the URL format
        element: <OfferDetails />,
      },
      {
        path: 'Offers/Complete',
        element: <Complete />,
      },
      {
        path: 'Logout',
        element: <Logout />,
      },
    ],
  },
]);
