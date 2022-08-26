import { Dispatch } from 'redux';
import { toast } from 'react-toastify';

import * as t from './types';

import {
  userIsLoggedInApi,
  userLoginApi,
  userLogOutApi,
  userRegistrationApi,
} from './../../apis/userApis';

import {
  IUserLoginData,
  IUserRegistrationData,
} from '../../constants/interfaces';

export const userIsLoggedIn = () => async (dispatch: Dispatch) => {
  dispatch({ type: t.USER_LOGIN_REQUEST, payload: {} });
  try {
    const res = await userIsLoggedInApi();
    dispatch({
      type: t.USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({ type: t.USER_LOGIN_FAILED, payload: error?.response?.data });
  }
};

export const userLogin =
  (
    data: IUserLoginData,
    navigate: (v: string) => void
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: t.USER_LOGIN_REQUEST, payload: {} });

    try {
      const res = await userLoginApi(data);
      dispatch({
        type: t.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      navigate('/dashboard');
    } catch (error: any) {
      dispatch({ type: t.USER_LOGIN_FAILED, payload: error?.response?.data });
      console.log({ error });
      toast.error(error.response.data.message || 'Something went wrong.');
    }
  };

export const userRegistration =
  (
    data: IUserRegistrationData,
    navigate: (v: string) => void
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: t.USER_REGISTRATION_REQUEST, payload: {} });

    try {
      const res = await userRegistrationApi(data);
      dispatch({
        type: t.USER_REGISTRATION_SUCCESS,
        payload: res.data,
      });
      navigate('/dashboard');
    } catch (error: any) {
      dispatch({
        type: t.USER_REGISTRATION_FAILED,
        payload: error?.response?.data,
      });
      toast.error(error.response.data.message || 'Something went wrong.');
    }
  };

export const userLogout =
  (navigate: (v: string) => void) => async (dispatch: Dispatch) => {
    dispatch({ type: t.USER_LOGOUT_REQUEST, payload: {} });

    try {
      await userLogOutApi();
      dispatch({
        type: t.USER_LOGOUT_SUCCESS,
        payload: {},
      });
      navigate('/login');
    } catch (error: any) {
      dispatch({ type: t.USER_LOGOUT_FAILED, payload: error?.response?.data });
      toast.error(error.response.data.message || 'Something went wrong.');
    }
  };
