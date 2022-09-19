import style from './RegisterForm.module.css';
import { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendleSubmit = event => {
    event.preventDefault();

    onSubmit({ name: name, email: email, password: password });
    setName('');
    setEmail('');
    setPassword('');
  };

  const onChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };
  return (
    <form onSubmit={hendleSubmit} className={style.registerForm}>
      <input
        className={style.inputForm}
        type="text"
        name="name"
        required
        onChange={onChange}
        value={name}
        placeholder="Name"
      />

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
        SIGN UP
      </button>
    </form>
  );
};

export default RegisterForm;
