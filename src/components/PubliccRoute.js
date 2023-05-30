import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-slice';

const PublicRoute = ({ children, path = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn:', isLoggedIn);
  return <>{isLoggedIn ? <Navigate to={path} /> : children}</>;
};
export default PublicRoute;
