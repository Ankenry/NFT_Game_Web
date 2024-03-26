// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
// export default function* GameNftSaga() {
//   // See example in containers/GameNft/saga.js
// }

import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_TOKEN, saveToken } from './actions';

function* loadTokenSaga() {
  try {
    const token = yield call(localStorage.getItem, 'token');
    if (token) {
      yield put(saveToken(token));
    }
  } catch (error) {
    console.error('Error loading token:', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_TOKEN, loadTokenSaga);
}