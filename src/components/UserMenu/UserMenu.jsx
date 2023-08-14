import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.container}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
