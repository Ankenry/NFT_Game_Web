import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Compound state domain
 */

const selectCompoundDomain = state => state.Compound || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Compound
 */

const makeSelectCompound = () =>
  createSelector(
    selectCompoundDomain,
    substate => substate,
  );

export default makeSelectCompound;
export { selectCompoundDomain };
