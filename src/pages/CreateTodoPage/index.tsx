import { useState } from 'react';
import ProtectedLayout from '../../layout/ProtectedLayout';
import CreateTodoPageComponent from '../../pageComponents/CreateTodoPageComponent';

const CreateTodoPage = () => {
  const [isCreateTodoPageLoading, setIsCreateTodoPageLoading] =
    useState<boolean>(false);

  return (
    <>
      <ProtectedLayout isPageLoading={isCreateTodoPageLoading}>
        <CreateTodoPageComponent setIsCreateTodoPageLoading={setIsCreateTodoPageLoading} />
      </ProtectedLayout>
    </>
  );
};

export default CreateTodoPage;
