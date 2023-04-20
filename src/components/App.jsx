import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { refreshUser } from 'redux/auth/authOperations';
import AppRouter from 'routes/AppRouter';
import Navigation from 'components/Navigation/Navigation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
