import { useEffect, useState } from 'react';
import { ICreateTask, ISubTaskCreate } from '../../constants/interfaces';
import { Button, Input, InputErrorText, Textarea } from '../../styles/common';

import {
  AddSubTaskButton,
  AddSubTaskButtonWrapper,
  InputTitle,
  SingleInputWrapper,
  SubTaskWrapper,
  TodoTitleAndDescriptionWrapper,
  Wrapper,
} from './Styles';

import SubTaskCreateModal from './SubTaskCreateModal';
import SubTasks from './SubTasks';
import DashboardLayout from './../../layout/DashboardLayout';
import { scrollToTop } from '../../utils/scrollToTop';

interface IProps {
  setIsCreateTodoPageLoading: (v: boolean) => void;
}

const CreateTodoPageComponent = ({ setIsCreateTodoPageLoading }: IProps) => {
  const [error, setError] = useState('');

  // modal visibility state
  const [showSubTaskCreateModal, setShowSubTaskCreateModal] =
    useState<boolean>(false);

  // todo title and description holder state
  const [todo, setTodo] = useState<ICreateTask>({
    title: '',
    description: '',
  });

  // all sub tasks will be here
  const [subTasks, setSubTasks] = useState<ISubTaskCreate[]>([]);

  const handleAddSubTask = (subTaskValue: ISubTaskCreate): void => {
    const tempArr = [...subTasks];
    tempArr.push(subTaskValue);
    setSubTasks(tempArr);
  };

  const handleTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setTodo((prevState: ICreateTask) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCreateTodo: () => void = () => {
    if (!todo.title) {
      setError('Please enter the Todo Title.');
      return;
    }
    if (!todo.description) {
      setError('Please enter the Todo Description.');
      return;
    }

    if (todo.title.length > 100) {
      setError('Title can not be more then 100 characters');
      return;
    }

    if (todo.description.length > 1000) {
      setError('Description can not be more then 1000 characters');
      return;
    }

    console.log(todo);
    console.log(subTasks);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <DashboardLayout>
        <Wrapper>
          <TodoTitleAndDescriptionWrapper>
            <SingleInputWrapper>
              <InputTitle>Todo Title</InputTitle>
              <Input
                name="title"
                value={todo?.title}
                onChange={handleTodoInputChange}
                placeholder="Enter todo title here..."
              />
            </SingleInputWrapper>
            <SingleInputWrapper>
              <InputTitle>Todo Description</InputTitle>
              <Textarea
                name="description"
                value={todo?.description}
                onChange={handleTodoInputChange}
                placeholder="Enter todo description here..."
              />
            </SingleInputWrapper>
          </TodoTitleAndDescriptionWrapper>
          <SubTaskWrapper>
            <SubTasks subTasks={subTasks} setSubTasks={setSubTasks} />
            <AddSubTaskButtonWrapper>
              <AddSubTaskButton
                visible={
                  todo?.title?.length > 0 && todo?.description?.length > 0
                }
                onClick={() => setShowSubTaskCreateModal(true)}
              >
                Add Sub Task
              </AddSubTaskButton>
            </AddSubTaskButtonWrapper>
            <InputErrorText>{error}</InputErrorText>
          </SubTaskWrapper>

          <Button onClick={handleCreateTodo}>Create Todo</Button>
        </Wrapper>
      </DashboardLayout>
      <>
        <SubTaskCreateModal
          handleAddSubTask={handleAddSubTask}
          setShowSubTaskCreateModal={setShowSubTaskCreateModal}
          showSubTaskCreateModal={showSubTaskCreateModal}
        />
      </>
    </>
  );
};

export default CreateTodoPageComponent;
