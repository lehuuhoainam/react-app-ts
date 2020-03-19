/*
 *
 * Login actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const loginAction = (username, password) => action(ActionTypes.LOGIN_ACTION, { username, password });
export const loginSuccess = token => action(ActionTypes.LOGIN_SUCCESS, { token });
export const loginError = () => action(ActionTypes.LOGIN_ERROR);
