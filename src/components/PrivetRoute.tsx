import { Navigate } from 'react-router-dom';

interface IProps {
  children: JSX.Element;
}

const PrivetRoute = ({ children }: IProps) => {
  const isLoggedIn = true;
  return <>{isLoggedIn ? children : <Navigate to="/login" replace={true} />}</>;
};

export default PrivetRoute;
