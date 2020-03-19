/*
 *
 * ListUser reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  data: [],
};

function listUserReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST_ACTION:
      return state;
    case ActionTypes.GET_USER_LIST_SUCCESS:
      return {
        data: action.payload.data,
      };
    case ActionTypes.GET_USER_LIST_ERROR:
      return state;
    default:
      return state;
  }
}

export default listUserReducer;
