import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.nav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
