import { NavLink } from 'react-router-dom';
import style from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={style.navbarAuth}>
      <NavLink className={style.navbarAuthLink} to="/register">
        Register
      </NavLink>
      <NavLink className={style.navbarAuthLink} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
