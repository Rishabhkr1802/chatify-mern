import { BellRing, Grip, LogOut, MessageSquareDot, Palette, Settings, User } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutThunk } from '../store/AuthSlice';

function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <nav className="flex justify-between items-center shadow-lg p-3">
      <Link to="/" className="flex gap-2 items-center animate-pulse">
        <MessageSquareDot size={25} className="" />
        <h3 className="bg-linear-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent text-3xl font-bold">Chatify</h3>
      </Link>

      <div className="flex items-center gap-4">

        <div className="dropdown dropdown-end hover:cursor-pointer">
          <BellRing size={23} tabIndex={0} role="button" className='outline-0 rounded-field' />
          <ul tabIndex="-1" className="menu dropdown-content bg-base-400 rounded-box z-10 mt-5 w-80 p-2 shadow-lg">
            <h3 className='text-center text-xl text-base-400'>Notifications</h3>
            <div className="divider m-1"></div>
            <li><Link to="/themes"><Palette size={20} /> Themes</Link></li>
          </ul>
        </div>

        <Link to="/profile"><User size={23} /></Link>

        <div className="dropdown dropdown-end hover:cursor-pointer">
          <Grip size={24} tabIndex={0} role="button" className='outline-0 rounded-field' />
          <ul tabIndex="-1" className="menu dropdown-content bg-base-400 rounded-box z-10 mt-5 w-40 p-2 shadow-lg">
            <li><Link to="/themes"><Palette size={20} /> Themes</Link></li>
            <li><Link to="/setting"><Settings size={20} /> Setting</Link></li>
            <li><button onClick={handleLogout}><LogOut size={20} />Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;