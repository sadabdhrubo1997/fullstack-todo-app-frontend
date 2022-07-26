import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { TTodosCategory } from '../../constants/interfaces';
import DashboardLayout from '../../layout/DashboardLayout';

import { handleTodosPageHeadingByCategory } from '../../utils/handleTodosPageHeadingByCategory';
import { scrollToTop } from '../../utils/scrollToTop';
import FilterDropdown from './FilterDropdown';
import { PaginationWrapper, WrapperTop } from './Styles';
import TodosWrapper from './todosWrapper';

const LIMIT: number = 10;

const TodoPageComponent = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [todoCategory, setTodoCategory] = useState<TTodosCategory>('all');
  const [, setCurrentPage] = useState<number>(1);
  const [count] = useState<number>(300);
  // const [todos, setTodos] = useState<any[]>([]);

  const handlePagination = (page: number, pageSize: number) => {
    setCurrentPage(page);
    console.log({ page, pageSize });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <DashboardLayout>
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
      </DashboardLayout>
    </>
  );
};

export default TodoPageComponent;
