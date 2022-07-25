import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MenuDashboardIcon from '../icons/MenuDashboardIcon';
import MenuTodoIcon from '../icons/MenuTodoIcon';
import MenuTrashIcon from '../icons/MenuTrashIcon';
import TodoLogo from '../icons/TodoLogo';

const Sidebar: FC = () => {
  return (
    <Wrapper>
      <LogoWrapper to="/">
        <TodoLogo width={25} />
        <span>Todo</span>
      </LogoWrapper>
      <MenuLink to="/">
        <MenuDashboardIcon width={20} /> Dashboard
      </MenuLink>
      <MenuLink to="/todos">
        <MenuTodoIcon width={20} /> Todo
      </MenuLink>
      <MenuLink to="/trash">
        <MenuTrashIcon width={17} /> Trash
      </MenuLink>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 220px;
  position: fixed;
  z-index: 99;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px 0 30px 20px;
  background-color: #ffffff;
  border-right: 1px solid var(--color-primary);
`;

const MenuLink = styled(NavLink)<any>`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  /* background-color: rgb(247, 247, 247); */
  padding: 10px 10px 10px 15px;
  border-radius: 5px 0 0 5px;
  margin-bottom: 8px;
  user-select: none;
  /* transition: 0.2s; */
  position: relative;
  z-index: 105;
  border: 1px solid rgba(255, 255, 255, 0);
  border-right: none;
  right: -1px;

  &:hover {
    background-color: rgb(247, 247, 247);
    color: var(--color-primary);
    border: 1px solid #fff;
    border-right: 1px solid var(--color-primary);
  }
  &.active {
    background-color: rgb(247, 247, 247);
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-right: none;
  }

  svg {
    display: inline-block;
    margin-right: 12px;

    path {
      fill: var(--color-primary);
    }
  }
`;

const LogoWrapper = styled(NavLink)<any>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 50px;

  span {
    margin-left: 8px;
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    user-select: none;
  }
`;
