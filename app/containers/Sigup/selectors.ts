import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the sigup state domain
 */

const selectSigupDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sigup
 */

const makeSelectSigup = () =>
  createSelector(
    selectSigupDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectSigup;
export { selectSigupDomain };
