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
    <div className={style.wrapp}>
      <form onSubmit={hendleSubmit} className={style.registerForm}>
        <input
          className={style.inputForm}
          type="email"
          name="email"
          required
          onChange={onChange}
          value={email}
          placeholder="Email"
        />

        <input
          className={style.inputForm}
          type="password"
          name="password"
          required
          onChange={onChange}
          value={password}
          placeholder="Password"
        />
        <button className={style.btn} type="submit">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
