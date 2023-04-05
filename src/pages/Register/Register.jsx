import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';
import { selectIsLoading, selectError } from 'redux/auth/authSelectors';
import { resetAuthError } from 'redux/auth/authSlice';
import Loader from 'components/Loader/Loader';

import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(resetAuthError());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  const registerForm = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Username <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Invalid email address"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          pattern="(?=.*[a-z])(?=.*[1-9]).{8,}"
          title="The password cannot be less than 7 characters and must contain at least one number, one lowercase latin letter."
        />
      </label>
      <button className={styles.btnRegister} type="submit">
        Register
      </button>
    </form>
  );

  return (
    <div className={styles.registerWrapper}>
      {isLoading && <Loader />}

      {!isLoading && registerForm}

      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
    </div>
  );
};

export default Register;
