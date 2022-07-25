import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SingleTodoLarge = () => {
  return (
    <>
      <Wrapper>
        <Title>Single Todo</Title>
        <Status>Status</Status>
        <Progress>Progress</Progress>
        <Action>
          <ViewDetailsButton to="/todo/single-todo-id">
            View Details
          </ViewDetailsButton>
        </Action>
      </Wrapper>
    </>
  );
};

export default SingleTodoLarge;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(116, 125, 140, 0.2);
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
`;

const Title = styled(Field)`
  width: 55%;
  font-size: 16px;
`;

const Status = styled(Field)`
  width: 15%;
  justify-content: center;
`;

const Progress = styled(Field)`
  width: 15%;
  justify-content: center;
`;

const Action = styled(Field)`
  width: 15%;
  justify-content: center;
`;

const ViewDetailsButton = styled(Link)<any>`
  padding: 5px 15px;
  font-size: 14px;
  color: var(--color-primary-deep2);
  background-color: rgba(116, 125, 140, 0.2);
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.15s;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
  }
`;
