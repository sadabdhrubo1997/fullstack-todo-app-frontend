import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

import * as t from './types';

import {
  userIsLoggedInApi,
  userLoginApi,
  userLogOutApi,
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
    toast.error(error.response.data.message || 'Something went wrong.');
  }
};

export const userLogin =
  (
    data: IUserLoginData,
    setIsLoading: (v: boolean) => void,
    navigate: (v: string) => void
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: t.USER_LOGIN_REQUEST, payload: {} });
    setIsLoading(true);

    try {
      const res = await userLoginApi(data);
      dispatch({
        type: t.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error: any) {
      dispatch({ type: t.USER_LOGIN_FAILED, payload: error?.response?.data });
      setIsLoading(false);
      toast.error(error.response.data.message || 'Something went wrong.');
    }
  };

export const userRegistration =
  (
    data: IUserRegistrationData,
    setIsLoading: (v: boolean) => void,
    navigate: (v: string) => void
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: t.USER_REGISTRATION_REQUEST, payload: {} });
    setIsLoading(true);

    try {
      const res = await userLoginApi(data);
      dispatch({
        type: t.USER_REGISTRATION_SUCCESS,
        payload: res.data,
      });
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error: any) {
      dispatch({
        type: t.USER_REGISTRATION_FAILED,
        payload: error?.response?.data,
      });
      setIsLoading(false);
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
