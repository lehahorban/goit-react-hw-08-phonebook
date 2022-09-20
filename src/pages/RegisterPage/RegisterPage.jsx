import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signupOperations } from 'redux/auth/auth-operations';

import style from '../RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signupOperations(data));
  };

  return (
    <div className={style.pageWrapper}>
      <h1 className={style.title}>Sign Up</h1>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
