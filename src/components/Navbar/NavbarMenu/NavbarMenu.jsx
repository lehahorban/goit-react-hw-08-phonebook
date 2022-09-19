import UserMenu from '../UserMenu/UserMenu';
import NavbarAuth from '../NavbarAuth/NavbarAuth';
import { NavLink } from 'react-router-dom';
import style from './NavbarMenu.module.css';
import useAuth from 'hooks/useAuth';

const NavbarMenu = () => {
  const isLogin = useAuth();
  return (
    <div className={style.navbarMenu}>
      <div className={style.wrappMenu}>
        <NavLink className={style.homeLink} to="/">
          Home
        </NavLink>
        {isLogin && (
          <NavLink className={style.navbarAuthLink} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </div>
  );
};

export default NavbarMenu;
