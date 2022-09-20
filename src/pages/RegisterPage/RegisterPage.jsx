import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupOperations } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import style from '../RegisterPage/RegisterPage.module.css';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(getAuthError);

  const showError = () => {
    if (message) {
      return toast.error(message);
    }
  };

  const onRegister = data => {
    dispatch(signupOperations(data));
    showError();
  };

  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Sign Up</h1>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
