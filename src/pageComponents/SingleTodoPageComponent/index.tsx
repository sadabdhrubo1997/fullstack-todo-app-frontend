import ProtectedLayout from './../../layout/ProtectedLayout';
import TodoTitleDescription from './TodoTitleDescription';

const SingleTodoPageComponent = () => {
  return (
    <>
      <ProtectedLayout isPageLoading={false}>
        <TodoTitleDescription/>
      </ProtectedLayout>
    </>
  );
};

export default SingleTodoPageComponent;
