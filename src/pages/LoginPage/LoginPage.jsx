import style from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginOperations } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(getAuthError);
  const showError = () => {
    if (message) {
      return toast.error(message);
    }
  };

  const onLogin = data => {
    dispatch(loginOperations(data));
    showError();
  };

  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Log In</h1>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
