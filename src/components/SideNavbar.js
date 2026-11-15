
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { selectUser } from '../features/userSlice';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

/**
 * @description - 
 * @returns {React.FC}
 */
const SideNavbar = ({ open, setOpen }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const sidenavRef = useRef(null);
  const closeButtonRef = useRef(null);

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
    const handleClickOutside = (event) => {
      if (open && sidenavRef.current && !sidenavRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, setOpen]);

  return (
    <>
      {open && <div className="sidenav-overlay" onClick={() => setOpen(false)} />}
      <nav ref={sidenavRef} id="mySidenav" aria-label="Mobile menu" className={`sidenav ${open ? 'sidenavOpen' : ''}`}>
        <button ref={closeButtonRef} className="closebtn" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/movies" onClick={() => setOpen(false)}>Movies</Link>
        <Link to="/tv-shows" onClick={() => setOpen(false)}>TV Shows</Link>
        {user && user.email ? (
          <span>
            <Link to="/profile" onClick={() => setOpen(false)}>My Account</Link>
            <button type="button" className="sidenavLogout bg-transparent border-0" onClick={handleLogout}>Sign Out</button>
          </span>
        ) : (
          <span>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
          </span>
        )}
      </nav>
    </>
  );
};

export default SideNavbar;
