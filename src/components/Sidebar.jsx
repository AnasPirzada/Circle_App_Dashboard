import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/dashboard/Offers'>Offers</Link>
        </li>
        <li>
          <Link to='/dashboard/Logout'>Logout</Link>
        </li>
        {/* Add more links here as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
