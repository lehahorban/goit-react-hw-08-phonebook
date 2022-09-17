import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupOperations } from 'redux/auth/auth-operations';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

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
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={onRegister} />
      <p>{message}</p>
    </div>
  );
};

export default RegisterPage;
