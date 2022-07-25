import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import DownArrow1 from '../icons/DownArrow1';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <span onClick={() => console.log(' hello')}>
            <UserOutlined />
            &nbsp; Profile
          </span>
        ),
      },
      {
        key: '2',
        label: <span>Logout</span>,
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

/*
animate={{ x: 0 }}
initial={{ x: -220 }}
transition={{ delay: 1 }}
exit={{ x: -220, transition: { duration: 0.2 } }}
*/
const Avatar = () => {
  return (
    <>
      <Dropdown trigger={['click']} overlay={menu} placement="bottomRight">
        <Wrapper>
          <AvatarImage>
            <img src="/assets/images/avatar.png" alt="avatar" />
          </AvatarImage>
          <UserName>User Name</UserName>
          <DownArrowIcon>
            <DownArrow1 />
          </DownArrowIcon>
        </Wrapper>
      </Dropdown>
    </>
  );
};

export default Avatar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  /* box-shadow: -10px 10px 50px rgba(233, 233, 233, 0.8); */
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
`;

const AvatarImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  overflow: hidden;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0 10px;
  user-select: none;
`;

const DownArrowIcon = styled.div`
  svg {
    path {
      fill: var(--color-primary);
    }
  }
`;
