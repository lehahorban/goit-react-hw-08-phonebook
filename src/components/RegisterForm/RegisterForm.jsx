// import { initialState } from './initialState';
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
      <label>Name</label>
      <input
        type="text"
        name="name"
        required
        onChange={onChange}
        value={name}
      />

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

export default RegisterForm;
