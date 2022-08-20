import * as t from './types';

interface userReducersInterface {
  type: string;
  payload: {
    data: {
      user?: object;
    };
    error?: string;
    isLoggedIn?: boolean;
    message?: string;
  };
}

const initialState = {
  user: {},
  isLoading: true,
  isLoggedIn: false,
  error: '',
  message: '',
};

const authReducers = (
  state = initialState,
  { type, payload }: userReducersInterface
) => {
  switch (type) {
    case t.USER_LOGIN_REQUEST:
    case t.USER_REGISTRATION_REQUEST:
    case t.USER_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case t.USER_LOGIN_SUCCESS:
    case t.USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload?.data?.user,
        isLoggedIn: true,
        message: payload?.message,
        error: '',
      };
    case t.USER_LOGIN_FAILED:
    case t.USER_LOGOUT_FAILED:
    case t.USER_REGISTRATION_FAILED:
      return {
        ...state,
        user: {},
        isLoading: false,
        isLoggedIn: false,
        error: payload?.message,
        message: '',
      };

    case t.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isLoading: false,
        isLoggedIn: false,
        error: '',
        message: '',
      };

    default:
      return state;
  }
};

export default authReducers;
