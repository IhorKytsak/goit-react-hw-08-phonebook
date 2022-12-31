import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userWrapper}>
      <h4 className={styles.username}>
        {user.name} ({user.email})
      </h4>
      <button
        className={styles.logoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
