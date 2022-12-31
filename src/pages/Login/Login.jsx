import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';
import { selectIsLoading, selectError } from 'redux/auth/authSelectors';
import { resetAuthError } from 'redux/auth/authSlice';
import Loader from 'components/Loader/Loader';

import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(resetAuthError());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    event.currentTarget.reset();
  };

  const loginForm = (
    <form onSubmit={handleSubmit}>
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );

  return (
    <div className={styles.loginWrapper}>
      {isLoading && <Loader />}

      {!isLoading && loginForm}

      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
    </div>
  );
};

export default Login;
