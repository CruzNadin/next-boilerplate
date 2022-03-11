import { LOGIN_USER } from '../actionTypes';

export const loginUser = (user: any, history: any) => ({
  type: LOGIN_USER,
  payload: { user, history },
});
