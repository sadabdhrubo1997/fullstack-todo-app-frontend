import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CirclePlusIcon from './icons/CirclePlusIcon';

const CreateTodoButton = () => {
  return (
    <Wrapper to="/create-todo">
      <CirclePlusIcon />
      Create Todo
    </Wrapper>
  );
};

export default CreateTodoButton;

const Wrapper = styled(NavLink)`
  display: inline-flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: var(--color-primary);
  padding: 10px 15px;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: var(--color-primary-deep1);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
