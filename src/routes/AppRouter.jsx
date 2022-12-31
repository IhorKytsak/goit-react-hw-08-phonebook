import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CustomRoute from 'routes/helpers/CustomRoute';
import Login from 'pages/Login/Login';
import Loader from 'components/Loader/Loader';

const AppRouter = () => {
  const Contacts = lazy(() => import('pages/Contacts/Contacts'));
  const Register = lazy(() => import('pages/Register/Register'));

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/register"
          element={
            <CustomRoute routeMode="restricted">
              <Register />
            </CustomRoute>
          }
        />
        <Route
          path="/login"
          element={
            <CustomRoute routeMode="restricted">
              <Login />
            </CustomRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <CustomRoute routeMode="protected">
              <Contacts />
            </CustomRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
