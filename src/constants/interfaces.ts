export interface ISvgIcon {
  width?: number;
  height?: number;
}

export interface ICreateTask {
  title: string;
  description: string;
}

export interface ISubTaskCreate extends ICreateTask {
  id: number;
}

export interface ISubTaskToAdd {
  taskId: string;
  id: number;
  title: string;
  description: string;
}

export type TTodosCategory = 'all' | 'ongoing' | 'paused' | 'done';

export type TTodoStatus = 'new' | 'ongoing' | 'paused' | 'done';

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserRegistrationData extends IUserLoginData {
  firstName: string;
  lastName: string;
}
