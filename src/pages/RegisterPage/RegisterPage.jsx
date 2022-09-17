import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupOperations } from 'redux/auth/auth-operations';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import style from '../RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    console.log(data);
    dispatch(signupOperations(data));
  };
  console.log(isLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Register page</h1>
      <RegisterForm onSubmit={onRegister} />
      <p className={style.errorMessage}>{message}</p>
    </div>
  );
};

export default RegisterPage;
