import style from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginOperations } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(loginOperations(data));
  };

  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Log In</h1>
      <LoginForm onSubmit={onLogin} />
      <p className={style.errorMessage}>{message}</p>
    </div>
  );
};

export default LoginPage;
