import style from './LoginForm.module.css';
import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendleSubmit = event => {
    event.preventDefault();

    onSubmit({ email: email, password: password });
    setEmail('');
    setPassword('');
  };

  const onChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };
  return (
    <form onSubmit={hendleSubmit} className={style.registerForm}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        required
        onChange={onChange}
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        required
        onChange={onChange}
        value={password}
      />
      <button className={style.btn} type="submit">
        Registration
      </button>
    </form>
  );
};

export default LoginForm;
