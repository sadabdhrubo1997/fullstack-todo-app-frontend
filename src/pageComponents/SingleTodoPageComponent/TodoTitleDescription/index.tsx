import { useState } from 'react';
import EditIcon from '../../../components/icons/EditIcon';
import EditTitleDescriptionModal from './EditTitleDescriptionModal';
import StatusProgress from './StatusProgress/index';
import {
  ActionButton,
  Description,
  Title,
  TitleWrapper,
  Wrapper,
} from './Styles';

const TodoTitleDescription = () => {
  const [showTitleDescriptionEditModal, setShowTitleDescriptionEditModal] =
    useState(false);

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>
            Todo Title Todo Title Todo TitleTodo TitleTodo Title Todo Title Todo
          </Title>
          <div>
            <ActionButton
              onClick={() => setShowTitleDescriptionEditModal(true)}
            >
              <EditIcon />
              Edit
            </ActionButton>
          </div>
        </TitleWrapper>
        <Description>
          <b>Description : &nbsp;&nbsp;&nbsp;</b> Todo Title Todo Title Todo
          TitleTodo TitleTodo Title Todo Title Todo Title Todo Title Todo
          TitleTodo TitleTodo Title Todo Title Todo Title Todo Title Todo
          TitleTodo TitleTodo Title Todo Title Todo Title Todo Title Todo
          TitleTodo TitleTodo Title Todo Title Todo Title Todo Title Todo
          TitleTodo TitleTodo Title Todo Title Todo Title Todo Title Todo
          TitleTodo TitleTodo Title Todo Title Todo Title Todo Title Todo
        </Description>
      </Wrapper>
      <StatusProgress />
      <>
        <EditTitleDescriptionModal
          setShowTitleDescriptionEditModal={setShowTitleDescriptionEditModal}
          showTitleDescriptionEditModal={showTitleDescriptionEditModal}
        />
      </>
    </>
  );
};

export default TodoTitleDescription;
