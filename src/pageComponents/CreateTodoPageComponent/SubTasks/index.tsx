import { ISubTaskCreate } from '../../../constants/interfaces';
import { SubTaskHeading } from '../Styles';
import SingleSubTask from './SingleSubTask';

interface IProps {
  subTasks: ISubTaskCreate[];
  setSubTasks: (v: ISubTaskCreate[]) => void;
}

const SubTasks = ({ subTasks, setSubTasks }: IProps) => {
  return (
    <>
      {!!subTasks?.length && <SubTaskHeading>Sub Tasks : </SubTaskHeading>}
      {!!subTasks?.length &&
        subTasks?.map((subTask: ISubTaskCreate, id: number) => (
          <SingleSubTask
            data={subTask}
            serial={id + 1}
            subTasks={subTasks}
            setSubTasks={setSubTasks}
            key={subTask?.id}
          />
        ))}
    </>
  );
};

export default SubTasks;
