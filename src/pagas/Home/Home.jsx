import { Outlet } from 'react-router-dom';
import css from './Home.module.css';

const HomePage = () => {
  return (
    <main className={css.container}>
      <p className={css.text}>Your contact book</p>
      <Outlet />
    </main>
  );
};

export default HomePage;
