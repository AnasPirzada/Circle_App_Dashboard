import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState(
    '/dashboard/activity-group-info'
  ); // Default active state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility
  const location = useLocation();

  // Update active route based on current location
  useEffect(() => {
    setActiveRoute(location.pathname);
    setIsSidebarOpen(false); // Close sidebar when navigating to a new route on mobile
  }, [location.pathname]);

  const handleNavClick = route => {
    setActiveRoute(route);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  // Check if the current route is part of the Dashboard
  const isDashboardActive =
    activeRoute.startsWith('/dashboard') &&
    !activeRoute.startsWith('/dashboard/Offers');

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className='lg:hidden p-4 text-gray-400' onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <img src='/iconamoon_close.svg' />
        ) : (
          <img src='/hamburger-menu.svg' />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen w-72 bg-[#383838] text-gray-400 flex flex-col items-start px-6 py-8 space-y-8 fixed lg:relative z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <NavLink
          to='/'
          onClick={() => handleNavClick('/')}
          className='flex items-center space-x-3'
        >
          <img src='/Logo.svg' alt='Logo' />
        </NavLink>
        <div className='flex flex-col space-y-6 w-full'>
          {/* Dashboard Section */}
          <div className='flex flex-col space-y-2'>
            <NavLink
              to='/dashboard'
              onClick={() => handleNavClick('/dashboard')}
              className={`flex items-center space-x-2 ${
                isDashboardActive ? 'text-[#FFC491]' : 'text-gray-400'
              }`}
            >
              <img src='/Explore.svg' alt='Dashboard Icon' />
              <span className='text-xl'>Dashboard</span>
            </NavLink>
            <div className='pl-10 flex flex-col space-y-1'>
              <NavLink
                to='/dashboard/activity-group-info'
                onClick={() => handleNavClick('/dashboard/activity-group-info')}
                className={`text-lg flex items-center ${
                  activeRoute === '/dashboard/activity-group-info'
                    ? 'text-[#FFC491]'
                    : 'text-[#A7A7A7]'
                }`}
              >
                <span>Activity Group Info</span>
              </NavLink>
              <NavLink
                to='/dashboard/view-offers'
                onClick={() => handleNavClick('/dashboard/view-offers')}
                className={`text-lg flex items-center ${
                  activeRoute === '/dashboard/view-offers'
                    ? 'text-[#FFC491]'
                    : 'text-[#A7A7A7]'
                }`}
              >
                <span>View - Offers</span>
              </NavLink>
              <NavLink
                to='/dashboard/activity-by-interest'
                onClick={() =>
                  handleNavClick('/dashboard/activity-by-interest')
                }
                className={`text-lg flex items-center ${
                  activeRoute === '/dashboard/activity-by-interest'
                    ? 'text-[#FFC491]'
                    : 'text-[#A7A7A7]'
                }`}
              >
                <span>Activity by Interest</span>
              </NavLink>
            </div>
          </div>
          {/* Offers Section */}
          <div className='flex flex-col space-y-2'>
            <NavLink
              to='/dashboard/Offers/Active'
              onClick={() => handleNavClick('/dashboard/Offers/Active')}
              className={`flex items-center space-x-2 ${
                activeRoute.startsWith('/dashboard/Offers/Active')
                  ? 'text-[#FFC491]'
                  : 'text-gray-400'
              }`}
            >
              <img src='/Explore.svg' alt='Explore Icon' />
              <span className='text-xl'>Offers</span>
            </NavLink>
            <div className='pl-10 flex flex-col space-y-1'>
              <NavLink
                to='/dashboard/Offers/Active'
                onClick={() => handleNavClick('/dashboard/Offers/Active')}
                className={`text-lg flex items-center ${
                  activeRoute === '/dashboard/Offers/Active'
                    ? 'text-[#FFC491]'
                    : 'text-[#A7A7A7]'
                }`}
              >
                <img
                  src={
                    activeRoute === '/dashboard/Offers/Active'
                      ? '/Line 29.svg'
                      : '/non_activeLine 29.svg'
                  }
                  className='me-3'
                  alt='Active Icon'
                />
                Active
              </NavLink>
              <NavLink
                to='/dashboard/Offers/Complete'
                onClick={() => handleNavClick('/dashboard/Offers/Complete')}
                className={`text-lg flex items-center ${
                  activeRoute === '/dashboard/Offers/Complete'
                    ? 'text-[#FFC491]'
                    : 'text-[#A7A7A7]'
                }`}
              >
                <img
                  src={
                    activeRoute === '/dashboard/Offers/Complete'
                      ? '/Line 29.svg'
                      : '/non_activeLine 29.svg'
                  }
                  className='me-3'
                  alt='Complete Icon'
                />
                Complete
              </NavLink>
            </div>
          </div>

          {/* Divider */}
          <hr className='border-[#A7A7A7] w-70' />

          {/* Logout */}
          <NavLink
            to='/dashboard/Logout'
            onClick={() => handleNavClick('/dashboard/Logout')}
            className={`flex items-center space-x-2 ${
              activeRoute === '/dashboard/Logout'
                ? 'text-[#FFC491]'
                : 'text-[#A7A7A7]'
            }`}
          >
            <img src='/solar_logout-2-broken.svg' alt='Logout Icon' />
            <span className='text-xl'>Logout</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
