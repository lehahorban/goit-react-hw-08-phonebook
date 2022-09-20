import UserMenu from '../UserMenu/UserMenu';
import NavbarAuth from '../NavbarAuth/NavbarAuth';
import { NavLink } from 'react-router-dom';
import style from './NavbarMenu.module.css';
import useAuth from 'hooks/useAuth';

const NavbarMenu = () => {
  const isLogin = useAuth();
  const getClassName = ({ isActive }) => {
    const className = isActive
      ? `${style.navbarAuthLink} ${style.navbarAuthLinkActive}`
      : style.navbarAuthLink;
    return className;
  };

  return (
    <div className={style.navbarMenu}>
      <div className={style.wrappMenu}>
        <NavLink className={getClassName} to="/">
          Home
        </NavLink>
        {isLogin && (
          <NavLink className={getClassName} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </div>
  );
};

export default NavbarMenu;
