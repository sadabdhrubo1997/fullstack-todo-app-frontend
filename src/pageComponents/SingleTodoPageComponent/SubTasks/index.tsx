import { ISubTaskToAdd } from '../../../constants/interfaces';
import { SubTaskHeading, Wrapper } from './Styles';
import SingleSubTaskToAddNew from './SingleSubTaskToAddNew';
import SingleSubTaskToShow from './SingleSubTaskToShow/index';

interface IProps {
  subTasks: any[];
  setSubTasks: (v: any[]) => void;
  subTasksToAdd: ISubTaskToAdd[];
  setSubTasksToAdd: (v: ISubTaskToAdd[]) => void;
}

const SubTasks = ({
  subTasks,
  setSubTasks,
  subTasksToAdd,
  setSubTasksToAdd,
}: IProps) => {
  return (
    <Wrapper>
      {!!subTasks?.length && <SubTaskHeading>Sub tasks</SubTaskHeading>}
      {!!subTasks?.length &&
        subTasks?.map((subTask: any, id: number) => (
          <SingleSubTaskToShow
            data={subTask}
            serial={id + 1}
            subTasks={subTasks}
            setSubTasks={setSubTasks}
            key={subTask?.id}
          />
        ))}

      {!!subTasksToAdd?.length && (
        <>
          <br />
          <br />
          <br />
          <SubTaskHeading>New sub tasks going to be added</SubTaskHeading>
        </>
      )}
      {!!subTasksToAdd?.length &&
        subTasksToAdd?.map((subTask: any, id: number) => (
          <SingleSubTaskToAddNew
            data={subTask}
            serial={id + 1}
            subTasksToAdd={subTasksToAdd}
            setSubTasksToAdd={setSubTasksToAdd}
            key={subTask?.id}
          />
        ))}
    </Wrapper>
  );
};

export default SubTasks;
