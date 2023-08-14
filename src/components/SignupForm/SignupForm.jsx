import { registerUser } from 'redux/auth/operations';
import css from './SignupForm.module.css';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
  };
  return (
    <div className={css.form_container}>
      <header className={css.header}>Signup</header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          autoComplete="off"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="off"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
        />
        <button type="submit">Signup</button>
      </form>
      <div className={css.figure}></div>
    </div>
  );
};

export default SignupForm;
