import { Pagination } from 'antd';
import { useState } from 'react';
import { TTodosCategory } from '../../constants/interfaces';

import ProtectedLayout from '../../layout/ProtectedLayout';
import { handleTodosPageHeadingByCategory } from '../../utils/handleTodosPageHeadingByCategory';
import FilterDropdown from './FilterDropdown';
import { PaginationWrapper, WrapperTop } from './Styles';
import TodosWrapper from './todosWrapper';

const LIMIT: number = 10;

const TodoPageComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todoCategory, setTodoCategory] = useState<TTodosCategory>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [count, setCount] = useState<number>(300);
  const [todos, setTodos] = useState<any[]>([]);

  const handlePagination = (page: number, pageSize: number) => {
    setCurrentPage(page);
    console.log({ page, pageSize });
  };

  return (
    <>
      <ProtectedLayout isPageLoading={isLoading}>
        <>
          <WrapperTop>
            <h2> {handleTodosPageHeadingByCategory(todoCategory)}</h2>
            <FilterDropdown
              todoCategory={todoCategory}
              setTodoCategory={setTodoCategory}
            />
          </WrapperTop>

          <TodosWrapper />

          <PaginationWrapper>
            <Pagination
              total={count}
              responsive={true}
              hideOnSinglePage={true}
              defaultPageSize={LIMIT}
              defaultCurrent={1}
              onChange={handlePagination}
            />
          </PaginationWrapper>
        </>
      </ProtectedLayout>
    </>
  );
};

export default TodoPageComponent;
