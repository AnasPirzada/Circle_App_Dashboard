import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const DashboardLayout = () => {
  const currentPath = window.location.pathname;

  // Redirect /dashboard/Offers to /dashboard/Offers/Active
  if (currentPath === '/dashboard/Offers') {
    return <Navigate to='/dashboard/Offers/Active' replace />;
  }
  return (
    <div className='grid grid-cols-12 h-screen'>
      <div className='col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-3 2xl:col-span-2 bg-[#383838] overflow-y-hidden'>
        <Sidebar />
      </div>

      <main className='col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-9 2xl:col-span-10 p-4  overflow-auto bg-[#1E1E1E]'>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
