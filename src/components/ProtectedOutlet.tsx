import { Navigate, Outlet } from 'react-router-dom';

const ProtectedOutlet = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedOutlet;
