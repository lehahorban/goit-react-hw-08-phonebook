import UserMenu from 'components/UserMenu/UserMenu';
import NavbarAuth from '../NavbarAuth';
import Home from 'components/Home/Home';
import style from './NavbarMenu.module.css';

const NavbarMenu = () => {
  return (
    <div className={style.navbarMenu}>
      <Home />
      <UserMenu></UserMenu>
      <NavbarAuth></NavbarAuth>
    </div>
  );
};

export default NavbarMenu;
