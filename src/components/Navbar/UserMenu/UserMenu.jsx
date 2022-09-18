// import { NavLink } from 'react-router-dom';
import style from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  return (
    <div className={style.wrappUser}>
      <p>{name}</p>
      <button className={style.btn} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
