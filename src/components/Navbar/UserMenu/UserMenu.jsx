// import { NavLink } from 'react-router-dom';
import style from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logoutOperations } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutOperations());
  return (
    <div className={style.wrappUser}>
      <p className={style.name}>
        Welcome, <span className={style.titleName}>{name}</span>!
      </p>

      <button onClick={onLogout} className={style.btn} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
