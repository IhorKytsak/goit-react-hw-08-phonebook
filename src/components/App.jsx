import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
    </>
  );
};

export default App;
