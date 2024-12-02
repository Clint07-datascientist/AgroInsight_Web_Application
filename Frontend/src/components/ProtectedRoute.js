import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userType = localStorage.getItem('userType');

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (requiredRole && userType !== requiredRole) {
    return <Redirect to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute; 