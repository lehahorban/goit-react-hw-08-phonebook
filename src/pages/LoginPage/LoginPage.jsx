import style from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginOperations } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(loginOperations(data));
  };

  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Log In</h1>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
