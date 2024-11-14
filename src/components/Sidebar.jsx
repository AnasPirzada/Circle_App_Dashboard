const Sidebar = () => {
  return (
    <div className='h-screen w-72 bg-[#383838] text-gray-400 flex flex-col items-start px-6 py-8 space-y-8'>
      {/* Logo and Title */}
      <div className='flex items-center space-x-3'>
        <img src='/Logo.svg' />
      </div>

      {/* Divider */}

      {/* Menu Items */}
      <div className='flex flex-col space-y-6 w-full'>
        {/* Offers Section */}
        <div className='flex flex-col space-y-2'>
          <div className='flex items-center space-x-2'>
            <img src='/Explore.svg' alt='' />
            <span className='text-xl text-[#A7A7A7]'>Offers</span>
          </div>
          <div className='pl-6 flex flex-col space-y-1'>
            <span className='text-lg text-[#A7A7A7] flex hover:text-[#FFC491] cursor-pointer'>
              <img src='/Line 29.svg' className='me-3' alt='' />
              Active
            </span>
            <span className='text-lg flex text-[#A7A7A7] hover:text-[#FFC491] cursor-pointer'>
              <img className='me-3' src='/non_activeLine 29.svg' alt='' />
              Complete
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className='border-gray-700 w-full' />

        {/* Logout */}
        <div className='flex items-center space-x-2 cursor-pointer hover:text-[#FFC491]'>
          <img src='/solar_logout-2-broken.svg' alt='' />
          <span className='text-xl text-[#A7A7A7]'>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
