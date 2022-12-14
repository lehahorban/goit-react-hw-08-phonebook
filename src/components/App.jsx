import { useEffect } from 'react';
import UserRoutes from 'UserRoutes';
import NavbarMenu from './Navbar/NavbarMenu/NavbarMenu';
import { useDispatch } from 'react-redux';
import { currentOperations } from 'redux/auth/auth-operations';
import style from './Style.module.css';
import image from './image.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperations());
  }, [dispatch]);
  return (
    <>
      <div className={style.container}>
        <NavbarMenu />
        <UserRoutes />
        <footer>
          <img className={style.image} src={image} alt="contacts" />
        </footer>
        <ToastContainer autoClose={4000} />
      </div>
    </>
  );
}

export default App;
