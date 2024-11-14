const Sidebar = () => {
  return (
    <div className='h-screen w-72 bg-[#383838] text-gray-400 flex flex-col items-start px-6 py-8 space-y-8'>
      {/* Logo and Title */}
      <div className='flex items-center space-x-3'>
        <img src='/Logo.svg' />
      </div>

      {/* Divider */}
      <hr className='border-gray-700 w-full' />

      {/* Menu Items */}
      <div className='flex flex-col space-y-6 w-full'>
        {/* Offers Section */}
        <div className='flex flex-col space-y-2'>
          <div className='flex items-center space-x-2'>
            <span>Offers</span>
          </div>
          <div className='pl-6 flex flex-col space-y-1'>
            <span className='text-sm text-gray-500 hover:text-orange-500 cursor-pointer'>
              Active
            </span>
            <span className='text-sm text-gray-500 hover:text-orange-500 cursor-pointer'>
              Complete
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className='border-gray-700 w-full' />

        {/* Logout */}
        <div className='flex items-center space-x-2 cursor-pointer hover:text-orange-500'>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
