/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable no-param-reassign */
import { LOGIN_USER } from '../actionTypes';

const initialState = {
  error: '',
  loading: false,
};

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
