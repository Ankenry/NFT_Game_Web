import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the GameNft state domain
 */

const selectGameNftDomain = state => state.GameNft || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GameNft
 */

const makeSelectGameNft = () =>
  createSelector(
    selectGameNftDomain,
    substate => substate,
  );

export default makeSelectGameNft;
export { selectGameNftDomain };
