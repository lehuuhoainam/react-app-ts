/*
 *
 * ListUser actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const getUserListAction = () => action(ActionTypes.GET_USER_LIST_ACTION);
export const getUserListSuccess = data => action(ActionTypes.GET_USER_LIST_SUCCESS, { data });
export const getUserListError = () => action(ActionTypes.GET_USER_LIST_ERROR);
