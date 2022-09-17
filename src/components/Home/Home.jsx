import style from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.home}>
      <NavLink className={style.homeLink} to="/">
        Home
      </NavLink>
    </div>
  );
};

export default Home;
