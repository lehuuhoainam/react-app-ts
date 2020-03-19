import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the listUser state domain
 */

const selectListUserDomain = (state: ApplicationRootState) => {
  return state.listUser || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListUser
 */

const makeSelectListUser = () =>
  createSelector(
    selectListUserDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectListUser;
export { selectListUserDomain };
