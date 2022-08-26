import { useState } from 'react';
import CreateTodoPageComponent from '../../pageComponents/CreateTodoPageComponent';

const CreateTodoPage = () => {
  const [, setIsCreateTodoPageLoading] =
    useState<boolean>(false);

  return (
    <>
        <CreateTodoPageComponent setIsCreateTodoPageLoading={setIsCreateTodoPageLoading} />
    </>
  );
};

export default CreateTodoPage;
