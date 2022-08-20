import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import FullScreenLoading from './FullScreenLoading';

const PublicOutlet = () => {
  const { auth } = useSelector((state: any) => state);

  return !!auth?.isLoading ? (
    <FullScreenLoading />
  ) : !auth?.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" replace={true} />
  );
};

export default PublicOutlet;
