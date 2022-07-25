import EditIcon from '../../../components/icons/EditIcon';
import StatusProgress from './StatusProgress/index';
import {
  ActionButton,
  Description,
  Title,
  TitleWrapper,
  Wrapper,
} from './Styles';

const TodoTitleDescription = () => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>
            Todo Title Todo Title Todo TitleTodo TitleTodo Title Todo Title Todo
          </Title>

          <div>
            <ActionButton>
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
    </>
  );
};

export default TodoTitleDescription;
