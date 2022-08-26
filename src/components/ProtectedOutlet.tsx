import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import FullScreenLoading from './FullScreenLoading';

const ProtectedOutlet = () => {
  const { auth } = useSelector((state: any) => state);

  return !!auth?.isLoading ? (
    <FullScreenLoading />
  ) : (
    <>
      {!!auth?.isLoggedIn ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default ProtectedOutlet;
