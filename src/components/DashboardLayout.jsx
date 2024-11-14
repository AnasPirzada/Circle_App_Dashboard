import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const DashboardLayout = () => {
  return (
    <div className='dashboard-layout flex'>
      <Sidebar />
      <main className='main-content'>
        <Outlet /> {/* This will render nested routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;
