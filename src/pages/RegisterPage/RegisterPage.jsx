import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupOperations } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
// import { Navigate } from 'react-router-dom';
// import useAuth from 'hooks/useAuth';
import style from '../RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(getAuthError);
  // const isLogin = useAuth();

  const onRegister = data => {
    console.log(data);
    dispatch(signupOperations(data));
  };
  // console.log(isLogin);
  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }
  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Sign Up</h1>
      <RegisterForm onSubmit={onRegister} />
      <p className={style.errorMessage}>{message}</p>
    </div>
  );
};

export default RegisterPage;
