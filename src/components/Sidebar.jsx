import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState('');
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

  // Check if the route is inside the /dashboard/Offers section
  const isOfferActive = activeRoute.startsWith('/dashboard/Offers');

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
          <div className='flex flex-col space-y-2'>
            <NavLink
              to='/dashboard/Offers'
              onClick={() => handleNavClick('/dashboard/Offers')}
              className={`flex items-center space-x-2 ${
                isOfferActive ? 'text-[#FFC491]' : 'text-gray-400'
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
