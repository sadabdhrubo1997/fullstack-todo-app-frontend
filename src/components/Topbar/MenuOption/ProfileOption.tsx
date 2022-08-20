import { UserOutlined } from '@ant-design/icons';

const ProfileOption = () => {
  return (
    <>
      <span onClick={() => console.log(' profile')}>
        <UserOutlined />
        &nbsp; Profile
      </span>
    </>
  );
};

export default ProfileOption;
