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
  isRoleSwitching: false,
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
      return {
        ...state,
        isLoading: true,
      };
   
    default:
      return state;
  }
};

export default authReducers;
