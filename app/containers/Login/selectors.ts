import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = (state: ApplicationRootState) => {
  return state.login || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectLogin;
export { selectLoginDomain };
