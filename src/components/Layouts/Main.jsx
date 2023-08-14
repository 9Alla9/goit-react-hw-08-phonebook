import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import css from './Main.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
