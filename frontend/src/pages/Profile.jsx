import { useSelector } from 'react-redux';
import Container from '../sharedComponents/Container';

function Profile() {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <Container heading={"Profile"}>
      <div className="mt-5 p-4 bg-base-300 flex items-center gap-8 shadow shadow-emerald-400 rounded-3xl">
        <figure className="max-w-100 rounded-2xl w-50 h-50 hover-3d">
          <img src={user.profilePic} alt="user" />
        </figure>

        <div className="hover-3d">
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-4xl bg-linear-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent font-semibold animate-pulse">{user.name}</h1>
            { user.bio && <p className="text-xl">{user.bio}</p> }
            <p className="text-xl">{user.email}</p>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default Profile;