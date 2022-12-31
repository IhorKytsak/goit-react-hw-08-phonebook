import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const CustomRoute = ({ children, routeMode }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (routeMode === 'protected') {
    return isLoggedIn ? children : <Navigate to="/login" />;
  }

  if (routeMode === 'restricted') {
    return isLoggedIn ? <Navigate to="/contacts" /> : children;
  }
};

CustomRoute.propTypes = {
  children: PropTypes.element.isRequired,
  routeMode: PropTypes.oneOf(['protected', 'restricted']),
};

export default CustomRoute;
