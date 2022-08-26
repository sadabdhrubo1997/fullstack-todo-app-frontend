import { ISubTaskCreate } from '../../constants/interfaces';

interface ICreateTodoValidator {
  todo: {
    title: string;
    description: string;
  };
  subTasks: ISubTaskCreate[];
}

export const createTodoValidator = ({
  todo,
  subTasks,
}: ICreateTodoValidator): boolean => {
  return true;
};
