import { useState } from 'react';
import { ISubTaskToAdd } from '../../constants/interfaces';

import ProtectedLayout from './../../layout/ProtectedLayout';
import {
  AddSubTaskButton,
  AddSubTaskButtonWrapper,
  ProceedNewSubTaskButton,
  Wrapper,
} from './Styles';
import SubTaskAddModal from './SubTaskAddModal';
import SubTasks from './SubTasks';
import TodoTitleDescription from './TodoTitleDescription';

const SingleTodoPageComponent = () => {
  const [showSubTaskAddModal, setShowSubTaskAddModal] = useState(false);

  const [subTasksToAdd, setSubTasksToAdd] = useState<ISubTaskToAdd[]>([]);
  const [subTasks, setSubTasks] = useState<any[]>([
    {
      id: 1,
      title: 'Sub Task title 1 Sub Task title 1',
      description:
        'Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1.',
      status: 'incomplete',
    },
    {
      id: 2,
      title: 'Sub Task title 1',
      description:
        'Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1.',
      status: 'incomplete',
    },
    {
      id: 3,
      title: 'Sub Task title 1',
      description:
        'Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1. Sub Task description 1.',
      status: 'complete',
    },
  ]);

  const handleAddSubTask = (subTaskValue: ISubTaskToAdd): void => {
    const tempArr = [...subTasksToAdd];
    tempArr.push(subTaskValue);
    setSubTasksToAdd(tempArr);
  };

  return (
    <>
      <ProtectedLayout isPageLoading={false}>
        <Wrapper>
          <TodoTitleDescription />
          <SubTasks
            subTasks={subTasks}
            setSubTasks={setSubTasks}
            subTasksToAdd={subTasksToAdd}
            setSubTasksToAdd={setSubTasksToAdd}
          />
          <AddSubTaskButtonWrapper>
            <AddSubTaskButton onClick={() => setShowSubTaskAddModal(true)}>
              Add New Sub Task
            </AddSubTaskButton>
            <ProceedNewSubTaskButton onClick={() => console.log(subTasksToAdd)}>
              Save Changes
            </ProceedNewSubTaskButton>
          </AddSubTaskButtonWrapper>
          <>
            <SubTaskAddModal
              handleAddSubTask={handleAddSubTask}
              setShowSubTaskAddModal={setShowSubTaskAddModal}
              showSubTaskAddModal={showSubTaskAddModal}
            />
          </>
        </Wrapper>
      </ProtectedLayout>
    </>
  );
};

export default SingleTodoPageComponent;
