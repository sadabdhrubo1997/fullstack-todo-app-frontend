import styled from 'styled-components';

import SingleTodo from './SingleTodo/SingleTodoLarge';
import TableHead from './TableHead';

const TodosWrapper = () => {
  return (
    <Wrapper>
      <TableHead />

      {/* all single todo from here */}
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
    </Wrapper>
  );
};

export default TodosWrapper;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 0 0 20px 0;
  border-radius: 5px;
`;
