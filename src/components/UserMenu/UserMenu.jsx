import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-slice';
import { logOut } from 'redux/auth/auth-operation';

import css from 'components/UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css['userMenu-container']}>
      <p className={css.username}>{name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
