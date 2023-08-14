import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { loginUser } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
  };
  return (
    <div className={css.form_container}>
      <header className={css.header}>Login</header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email address"
          autoComplete="off"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          autoComplete="off"
        />
        <button type="submit">Login</button>
      </form>
      <div className={css.figure}></div>
    </div>
  );
};

export default LoginForm;
