import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const DashboardLayout = () => {
  return (
    <div className='grid grid-cols-12 h-screen'>
      <div className='col-span-12 md:col-span-2 bg-[#383838]'>
        <Sidebar />
      </div>

      <main className='col-span-12 md:col-span-10 p-2 md:p-6 overflow-auto bg-[#1E1E1E]'>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
