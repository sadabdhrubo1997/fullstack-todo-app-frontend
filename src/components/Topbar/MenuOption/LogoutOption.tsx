import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../../redux/auth/action';

const LogoutOption = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout(navigate));
  };

  return (
    <>
      <span onClick={handleLogout}>
        <LogoutOutlined />
        &nbsp; Logout
      </span>
    </>
  );
};

export default LogoutOption;
