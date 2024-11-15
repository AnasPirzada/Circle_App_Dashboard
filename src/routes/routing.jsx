// src/routing/routing.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

import DashboardLayout from '../components/DashboardLayout.jsx';
import CreatePassword from '../pages/Auth/CreatePassword.jsx';
import ForgetPassword from '../pages/Auth/ForgetPassword.jsx';
import Login from '../pages/Auth/Login.jsx';
import OPT from '../pages/Auth/OPT.jsx';
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
    path: '/forgotpassword',
    element: <ForgetPassword />,
  },
  {
    path: '/otp',
    element: <OPT />,
  },
  {
    path: '/createpassword',
    element: <CreatePassword />,
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
      { path: '/dashboard/Logout', element: <Logout /> },
      { path: '/dashboard/login', element: <Login /> },
      { path: 'Logout', element: <Logout /> },
    ],
  },
]);
