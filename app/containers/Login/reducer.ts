/*
 *
 * Login reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  token: null,
};

function loginReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case ActionTypes.LOGIN_ACTION:
      return state;
    case ActionTypes.LOGIN_SUCCESS:
      return {
        token: action.payload.token,
      };
    case ActionTypes.LOGIN_ERROR:
      return state;
    default:
      return state;
  }
}

export default loginReducer;
