import style from './Home.module.css';
import contactImage from './img/pngwing.com.png';
import image from './img/pngwing.com (3).png';
import images from './img/pngwing.com (5).png';

const Home = () => {
  return (
    <div className={style.home}>
      <h1 className={style.title}>Welcome to contacts app!</h1>
      <div className={style.homeWrapp}>
        {' '}
        <img className={style.img} src={image} alt="img" />
        <img className={style.img} src={contactImage} alt="img" />
        <img className={style.img} src={images} alt="img" />
      </div>
    </div>
  );
};

export default Home;
