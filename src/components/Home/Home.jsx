import style from './Home.module.css';
import contactImage from './img/contacts.png';

const Home = () => {
  return (
    <div className={style.home}>
      <h1 className={style.title}>Welcome to contacts app!</h1>
      <img className={style.img} src={contactImage} alt="img" />
    </div>
  );
};

export default Home;