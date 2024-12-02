// src/routing/routing.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

import DashboardLayout from '../components/DashboardLayout.jsx';
import CreatePassword from '../pages/Auth/CreatePassword.jsx';
import ForgetPassword from '../pages/Auth/ForgetPassword.jsx';
import Login from '../pages/Auth/Login.jsx';
import OPT from '../pages/Auth/OPT.jsx';
import Logout from '../pages/Logout/index.jsx';

import ActivityByInterest from '../pages/Dashboard/ActivityByInterest.jsx';
import ActivityGroupInfo from '../pages/Dashboard/ActivityGroupInfo.jsx';
import ViewOffersInfo from '../pages/Dashboard/ViewOffersInfo.jsx';

import Active from '../pages/Offers/Active.jsx';
import Complete from '../pages/Offers/Complete.jsx';
import OfferDetails from '../pages/Offers/OfferDetails.jsx';

export const router = createBrowserRouter([
  // Authentication Routes
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

  // Dashboard and Sidebar Routes
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '', // Redirect /dashboard to default active sub-route
        element: <Navigate to='/dashboard/activity-group-info' replace />,
      },
      {
        path: '', // Redirect /dashboard to default active sub-route
        element: <Navigate to='/dashboard/Offers' replace />,
      },
      {
        path: 'activity-group-info',
        element: <ActivityGroupInfo />,
      },
      {
        path: 'View-Offers',
        element: <ViewOffersInfo />,
      },
      {
        path: 'activity-by-interest',
        element: <ActivityByInterest />,
      },
      {
        path: 'Offers/Active',
        element: <Active />,
      },
      {
        path: 'Offers/:id',
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
