import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../store/AuthSlice';
import { User, LogOut, Palette } from 'lucide-react';
import Container from '../sharedComponents/Container';

function Setting() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <Container heading={"Setting"}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
        <Link to="/update-profile" className="card bg-base-200 rounded-lg border p-10 lg:px-10 lg:py-20 hover:bg-secondary hover:scale-95 hover:text-secondary-content">
          <div className="flex gap-5 items-center">
            <User size={23} />
            <p className=''>Update Profile</p>
          </div>
        </Link>
        <Link to="/themes" className="card bg-base-200 rounded-lg border p-10 lg:px-10 lg:py-20 hover:bg-secondary hover:scale-95 hover:text-secondary-content">
          <div className="flex gap-5 items-center">
            <Palette size={23} />
            <p className=''>Themes</p>
          </div>
        </Link>
        <button onClick={handleLogout} className="card bg-base-200 rounded-lg border p-10 lg:px-10 lg:py-20 hover:bg-secondary hover:scale-95 hover:text-secondary-content">
          <div className="flex gap-5 items-center">
            <LogOut size={23} />
            <p className=''>Logout</p>
          </div>
        </button>
      </div>
    </Container>
  )
}

export default Setting;