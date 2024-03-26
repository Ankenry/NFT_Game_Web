import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the NftPack state domain
 */

const selectNftPackDomain = state => state.NftPack || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NftPack
 */

const makeSelectNftPack = () =>
  createSelector(
    selectNftPackDomain,
    substate => substate,
  );

export default makeSelectNftPack;
export { selectNftPackDomain };
