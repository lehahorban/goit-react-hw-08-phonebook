import style from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginOperations } from 'redux/auth/auth-operations';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onLogin = data => {
    console.log(data);
    dispatch(loginOperations(data));
  };
  console.log(isLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={style.pageWrapper}>
      <h2 className={style.title}>Login page</h2>
      <LoginForm onSubmit={onLogin} />
      <p className={style.errorMessage}>{message}</p>
    </div>
  );
};

export default LoginPage;
