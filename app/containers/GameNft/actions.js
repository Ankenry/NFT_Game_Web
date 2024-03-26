/*
 *
 * GameNft actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOAD_TOKEN = 'LOAD_TOKEN';

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  payload: token,
});

export const loadToken = () => ({
  type: LOAD_TOKEN,
});
