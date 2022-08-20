import Axios from './axiosConfig';

import {
  IUserLoginData,
  IUserRegistrationData,
} from './../constants/interfaces';

export const userRegistrationApi = (data: IUserRegistrationData) =>
  Axios.post('/api/user/registration', data);

export const userLoginApi = (data: IUserLoginData) =>
  Axios.post('/api/user/login', data);

export const userIsLoggedInApi = () => Axios.get('/api/user/isLoggedIn');
export const userLogOutApi = () => Axios.get('/api/user/logout');
