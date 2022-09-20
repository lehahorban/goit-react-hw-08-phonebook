import { NavLink } from 'react-router-dom';
import style from './NavbarAuth.module.css';

const NavbarAuth = () => {
  const getClassName = ({ isActive }) => {
    const className = isActive
      ? `${style.navbarAuthLink} ${style.navbarAuthLinkActive}`
      : style.navbarAuthLink;
    return className;
  };
  return (
    <div className={style.navbarAuth}>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
