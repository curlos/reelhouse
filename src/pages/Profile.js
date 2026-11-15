import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Plans from '../components/Plans';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { logout } from '../features/userSlice';
import TopNavbar from '../components/TopNavbar';

/**
 * @description - Page where the user can view their profile and their plans. They can subscribe to a different plan and also sign out.
 * @returns {React.FC}
 */
const Profile = () => {
  const user = useSelector(selectUser);
  const email = user && user.email;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * @description - Logout the user.
   */
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user || !email) {
      navigate('/');
    }

    window.scrollTo(0, 0);
  }, [email, navigate, user]);

  useEffect(() => {
    document.title = 'My Account | ReelHouse';
  }, []);

  return (
    user ? (
      <div className="d-flex justify-content-center align-items-center container mx-auto px-3 px-sm-0 bg-black">
         <TopNavbar />

        <main id="main-content" tabIndex={-1} className="w-100 overflow-auto navbarMarginTwo">
          <h1 className="mb-4">Edit Profile</h1>
          <div className="d-lg-flex gap-4">
            <div className="mb-4 mb-lg-0">
              <img src="/assets/reelhouse_avatar.svg" alt="" className="profileProfileUserAvatar" />
            </div>

            <div className="w-100">
              <input className="profileInput mb-4 text-white" value={email} readOnly aria-label="Email" />

              <hr />

              <Plans />
            </div>
          </div>

          <hr />

          <div className="d-flex flex-column flex-lg-row justify-content-center gap-2">
            <button type="button" className="profileBottomButton mb-4" onClick={handleLogout}>Sign Out</button>
          </div>
        </main>
      </div>
    ) : null

  );
};

export default Profile;