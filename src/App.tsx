import { FC, useEffect } from 'react';

import AppRoute from './AppRoute';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userIsLoggedIn } from './redux/auth/action';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userIsLoggedIn());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        <AppRoute />
      </>
      <>
        <ToastContainer />
      </>
    </>
  );
};

export default App;
