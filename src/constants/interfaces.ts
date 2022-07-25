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

export type TTodosCategory = 'all' | 'ongoing' | 'paused' | 'done';

export type TTodoStatus = 'new' | 'ongoing' | 'paused' | 'done';
