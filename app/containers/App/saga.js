/* eslint-disable prefer-destructuring */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { toast } from 'react-toastify';
import {
  logoutSuccess,
  logoutError,
  getUserInfoSuccess,
  getUserInfoError,
  getListExWalletSuccess,
  getListExWalletError,
  updateUserInfoSuccess,
  updateUserInfoError,
  getUserConnectSuccess,
  getUserConnectError,
  getTimePLSuccess,
  getTimePLError,
  getPlUserSuccess,
  getPlUserError,
  editWalletSuccess,
  editWalletError,
  editExchangeApiSuccess,
  editExchangeApiError,
  editNetworkSuccess,
  editNetworkError,
  editExchangeCsvSuccess,
  editExchangeCsvError,
  removeConnectionSuccess,
  removeConnectionError,
  getBlockListSuccess,
  getBlockListError,
  addBlockListSuccess,
  addBlockListError,
  removeBlockListSuccess,
  removeBlockListError,
  getCoinByUserSuccess,
  getCoinByUserError,
  getPlDemoSuccess,
  getPlDemoError,
  loginSocialSuccess,
  loginSocialError,
  getCoinsSuccess,
  getCoinsError,
  removeAvatarSuccess,
  removeAvatarError,
  getDemoConnectSuccess,
  getDemoConnectError,
  getViewLinkSuccess,
  getViewLinkError,
  createLinkSuccess,
  createLinkError,
  removeLinkSuccess,
  removeLinkError,
  editSharePageSuccess,
  editSharePageError,
  getDataLineChartSuccess,
  getDataLineChartError,
  getUserInfo,
  setExWalletSelect,
  getViewLink,
  setLinkShare,
  getDataLineChartDemoSuccess,
  getDataLineChartDemoError,
  resendConfirmEmailSuccess,
  resendConfirmEmailError,
  setupEmailSuccess,
  setupEmailError,
  getExchangeRateSuccess,
  getExchangeRateError,
} from './actions';
import {
  LOGOUT_PENDING,
  GET_USER_INFO_PENDING,
  GET_LIST_EX_WALLET_PENDING,
  UPDATE_USER_INFO_PENDING,
  GET_USER_CONNECT_PENDING,
  GET_TIME_PL_PENDING,
  GET_PL_USER_PENDING,
  EDIT_WALLET_PENDING,
  EDIT_EXCHANGE_API_PENDING,
  EDIT_NETWORK_PENDING,
  EDIT_EXCHANGE_CSV_PENDING,
  REMOVE_CONNECTION_PENDING,
  GET_BLOCK_LIST_PENDING,
  ADD_BLOCK_LIST_PENDING,
  REMOVE_BLOCK_LIST_PENDING,
  GET_COIN_BY_USER_PENDING,
  GET_PL_DEMO_PENDING,
  GET_COINS_PENDING,
  LOGIN_SOCIAL_PENDING,
  REMOVE_AVATAR_PENDING,
  DEMO_CONNECT_PENDING,
  CREATE_LINK_PENDING,
  GET_VIEW_LINK_PENDING,
  REMOVE_LINK_PENDING,
  EDIT_SHARE_PAGE_PENDING,
  GET_LINE_CHART_PENDING,
  RESEND_CONFIRM_EMAIL_PENDING,
  SETUP_EMAIL_PENDING,
  GET_LINE_CHART_DEMO_PENDING,
  EXCHANGE_RATE_PENDING,
} from './constants';

export function* logout(action) {
  const { data } = action;

  const url = '/accounts/logout';
  const payload = {
    url,
    data,
  };
  try {
    const respond = yield call(Api.post, payload);
    yield put(logoutSuccess(respond));
  } catch (err) {
    yield put(logoutError(err));
  }
}
export function* getUserInfoSaga() {
  const url = '/accounts/user-profile';
  const payload = {
    url,
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getUserInfoSuccess(respond));
  } catch (err) {
    yield put(getUserInfoError(err));
  }
}
export function* updateUserInfo(action) {
  const { data } = action;
  const formData = new FormData();
  formData.append('Avatar', data.avatar);
  const payload = {
    url: `/accounts/account-setting`,
    params: {
      Fullname: data.fullName,
      ViewSmallHoldings: data.viewSmallHoldings,
      SubscribeEmail: data.subscribeEmail,
    },
    data: formData,
  };

  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(updateUserInfoSuccess(response));
      yield put(getUserInfo());
      toast.success(`${response.message}`);
    } else {
      yield put(updateUserInfoError(response.message));
      toast.error(`${response.message}`, {
        icon: false,
      });
    }
  } catch (err) {
    yield put(updateUserInfoError(err));
  }
}
export function* removeAvatar() {
  const payload = {
    url: `/accounts/delete-avatar`,
  };

  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(removeAvatarSuccess(response));
      yield put(getUserInfo());
      toast.success(`${response.message}`);
    } else {
      yield put(removeAvatarError(response.message));
      toast.error(`${response.message}`, {
        icon: false,
      });
    }
  } catch (err) {
    yield put(removeAvatarError(err));
  }
}
export function* getListExWallet(action) {
  const { data } = action;
  const payload = {
    url: `/exchange/get-available`,
    params: {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      type: data.type,
      name: data.name,
    },
  };
  //   data.type: 1-wallet, 2- exchange,

  try {
    const respond = yield call(Api.get, payload);
    if (respond.success) {
      yield put(getListExWalletSuccess(respond));
    } else {
      yield put(getListExWalletError(respond.message));
    }
  } catch (err) {
    yield put(getListExWalletError(err));
  }
}
export function* getUserConnect(action) {
  const { data } = action;
  const url = '/user/user-connect';
  const payload = {
    url,
    params: {
      userId: data.userId,
      anonymousId: data.anonymousId,
      searchTerm: data.searchTerm,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getUserConnectSuccess(respond));
  } catch (err) {
    yield put(getUserConnectError(err));
  }
}
export function* getTimePL() {
  const url = '/custom/time-pl';
  const payload = {
    url,
  };
  try {
    const respond = yield call(Api.get, payload);
    if (respond.success) {
      yield put(getTimePLSuccess(respond));
    } else yield put(getTimePLError(respond.message));
  } catch (err) {
    yield put(getTimePLError(err));
  }
}
export function* getPlUser(action) {
  const { data } = action;
  const url = 'user/user-pl-exchange';
  const payload = {
    url,
    params: {
      timePl: data.timePl,
      chainId: data.chainId,
      exchangeId: data.exchangeId,
      walletAddress: data.walletAddress,
      userId: data.userId,
      anonymousId: data.anonymousId,
      isCSV: data.isCSV,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getPlUserSuccess(respond));
  } catch (err) {
    yield put(getPlUserError(err));
  }
}
export function* getDataLineChart(action) {
  const { data } = action;
  const url = 'user/user-pl-exchange';
  const payload = {
    url,
    params: {
      timePl: data.timePl,
      chainId: data.chainId,
      exchangeId: data.exchangeId,
      walletAddress: data.walletAddress,
      userId: data.userId,
      isCSV: data.isCSV,
      anonymousId: data.anonymousId,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getDataLineChartSuccess(respond));
  } catch (err) {
    yield put(getDataLineChartError(err));
  }
}
export function* getDataLineChartDemo(action) {
  const { data } = action;
  const url = '/demo/pl-exchange';
  const payload = {
    url,
    params: {
      timePl: data.timePl,
      exchangeId: data.exchangeId,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getDataLineChartDemoSuccess(respond));
  } catch (err) {
    yield put(getDataLineChartDemoError(err));
  }
}
export function* editWallet(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/edit-wallet`,
    params: {
      walletAddress: data.walletAddress,
      userId: data.userId,
      connectionName: data.connectionName,
      anonymousId: data.anonymousId,
    },
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(editWalletSuccess(response));
      toast.success(`${response.message}`);
    } else {
      yield put(editWalletError(response.message));
    }
  } catch (err) {
    yield put(editWalletError(err));
  }
}
export function* editNetwork(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/edit-network`,
    params: {
      userId: data.userId,
      anonymousId: data.anonymousId,
      connectionName: data.connectionName,
      chainId: data.chainId,
      walletAddress: data.walletAddress,
    },
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(editNetworkSuccess(response));
      toast.success(`${response.message}`);
    } else {
      yield put(editNetworkError(response.message));
    }
  } catch (err) {
    yield put(editNetworkError(err));
  }
}
export function* editExchangeApi(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/edit-exchange`,
    params: {
      exchangeId: data.exId,
      userId: data.userId,
      connectionName: data.connectionName,
      anonymousId: data.anonymousId,
      // apiKey: data.apiKey,
      // apiSecret: data.apiSecret,
    },
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(editExchangeApiSuccess(response));
      toast.success(`${response.message}`);
    } else {
      yield put(editExchangeApiError(response.message));
    }
  } catch (err) {
    yield put(editExchangeApiError(err));
  }
}
export function* editExchangeCsv(action) {
  const { data } = action;
  const formData = new FormData();
  formData.append('formFile', data.fileCsv);
  const payload = {
    url: `/portfolio/edit-exchange-csv`,
    params: {
      userId: data.userId,
      exchangeId: data.exId,
      connectionName: data.connectionName,
      anonymousId: data.anonymousId,
    },
    // data: formData,
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(editExchangeCsvSuccess(response));
      toast.success(`${response.message}`);
    } else {
      yield put(editExchangeCsvError(response.message));
    }
  } catch (err) {
    yield put(editExchangeCsvError(err));
  }
}

export function* removeConnection(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/delete-connect`,
    params: {
      walletAddress: data.walletAddress,
      userId: data.userId,
      exchangeId: data.exchangeId,
      anonymousId: data.anonymousId,
      chainId: data.chainId,
    },
  };
  try {
    const response = yield call(Api.deleteData, payload);
    if (response.success) {
      yield put(setExWalletSelect('ALL_ASSET'));
      yield put(removeConnectionSuccess(response));
      if (localStorage.getItem('token')) {
        yield put(getUserInfo());
      }
      toast.success(`${response.message}`);
    } else {
      yield put(removeConnectionError(response.message));
    }
  } catch (err) {
    yield put(removeConnectionError(err));
  }
}

export function* getBlockList(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/get-block-list`,
    params: {
      userId: data,
    },
  };
  try {
    const response = yield call(Api.get, payload);
    if (response.success) {
      yield put(getBlockListSuccess(response));
    } else {
      yield put(getBlockListError(response.message));
    }
  } catch (err) {
    yield put(getBlockListError(err));
  }
}

export function* addBlockList(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/put-block-list`,
    params: {
      userId: data.userId,
      coinId: data.coinId,
      anonymousId: data.anonymousId,
    },
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(addBlockListSuccess(response));
    } else {
      yield put(addBlockListError(response.message));
    }
  } catch (err) {
    yield put(addBlockListError(err));
  }
}
export function* removeBlockList(action) {
  const { data } = action;
  const payload = {
    url: `/portfolio/delete-block-list`,
    params: {
      userId: data.userId,
      coinId: data.coinId,
    },
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(removeBlockListSuccess(response));
      // toast.success(`${response.message}`);
    } else {
      yield put(removeBlockListError(response.message));
    }
  } catch (err) {
    yield put(removeBlockListError(err));
  }
}
export function* getCoinByUser(action) {
  const { data } = action;
  const payload = {
    url: `/user/get-coins-by-user-id`,
    params: {
      userId: data.userId,
      searchTerm: data.searchTerm,
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
    },
  };
  try {
    const response = yield call(Api.get, payload);
    if (response.success) {
      yield put(getCoinByUserSuccess(response));
    } else {
      yield put(getCoinByUserError(response.message));
    }
  } catch (err) {
    yield put(getCoinByUserError(err));
  }
}
export function* getPlDemo(action) {
  const { data } = action;
  const url = '/demo/pl-exchange';
  const payload = {
    url,
    params: {
      timePl: data.timePl,
      exchangeId: data.exchangeId,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getPlDemoSuccess(respond));
  } catch (err) {
    yield put(getPlDemoError(err));
  }
}

export function* loginSocial(action) {
  const { data } = action;
  const clonedData = { ...data };
  const payload = {
    url: `/accounts/social-login`,
    params: null,
    data: clonedData,
  };

  try {
    const respond = yield call(Api.post, payload);
    if (respond.success) {
      yield put(loginSocialSuccess(respond));
      yield put(getUserInfo());
    } else {
      yield put(loginSocialError(respond.message));
    }
  } catch (err) {
    yield put(loginSocialError(err));
  }
}
export function* getCoins(action) {
  const { data } = action;
  const payload = {
    url: `/transaction/get-coins`,
    params: {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      coinName: data.coinName,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    if (respond.success) {
      yield put(getCoinsSuccess(respond));
    } else {
      yield put(getCoinsError(respond.message));
    }
  } catch (err) {
    yield put(getCoinsError(err));
  }
}
export function* getDemoConnect(action) {
  const { data } = action;
  const url = '/demo/connect';
  const payload = {
    url,
    params: {
      searchTerm: data,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getDemoConnectSuccess(respond));
  } catch (err) {
    yield put(getDemoConnectError(err));
  }
}
export function* getViewLinkSaga(action) {
  const { data } = action;
  const payload = {
    url: `/share-portfolio/view-link`,
    params: {
      userId: data.userId,
      anonymousId: data.anonymousId,
    },
  };
  try {
    const respond = yield call(Api.get, payload);
    if (respond.success) {
      yield put(getViewLinkSuccess(respond));
    } else yield put(getViewLinkError(respond.message));
  } catch (err) {
    yield put(getViewLinkError(err));
  }
}
export function* createLink(action) {
  const { data } = action;
  const payload = {
    url: `/share-portfolio/create-link`,
    data: {
      userId: data.userId,
      viewBalance: data.viewBalance,
      token: data.token,
      userConnects: data.userConnects,
      pageId: data.PageId,
      allAsset: data.allAsset,
    },
  };
  try {
    const respond = yield call(Api.post, payload);
    if (respond.success) {
      yield put(createLinkSuccess(respond));
      yield put(setLinkShare());
      yield put(
        getViewLink({
          userId: JSON.parse(localStorage.getItem('user_info')).id,
          anonymousId: JSON.parse(localStorage.getItem('token_connect')),
        }),
      );
    } else {
      yield put(createLinkError(respond.message));
      toast.error(`${respond.message}`, {
        icon: false,
      });
    }
  } catch (err) {
    yield put(createLinkError(err));
  }
}
export function* removeLink(action) {
  const { data } = action;
  const payload = {
    url: `/share-portfolio/delete-link`,
    params: {
      pageId: data.pageId,
    },
  };
  try {
    const response = yield call(Api.post, payload);
    if (response.success) {
      yield put(
        getViewLink({
          userId: JSON.parse(localStorage.getItem('user_info')).id,
          anonymousId: JSON.parse(localStorage.getItem('token_connect')),
        }),
      );
      yield put(removeLinkSuccess(response));
    } else {
      yield put(removeLinkError(response.message));
      toast.error(`${response.message}`, {
        icon: false,
      });
    }
  } catch (err) {
    yield put(removeLinkError(err));
    console.log('err', err);
  }
}
export function* editSharePage(action) {
  const { data } = action;
  const payload = {
    url: `/share-portfolio/edit-share-page`,
    data: {
      userId: data.userId,
      token: data.token,
      viewBalance: data.viewBalance,
      pageId: data.pageId,
      allAsset: data.allAsset,
      userConnects: data.userConnects,
    },
  };
  try {
    const respond = yield call(Api.post, payload);
    if (respond.success) {
      yield put(
        getViewLink({
          userId: JSON.parse(localStorage.getItem('user_info')).id,
          anonymousId: JSON.parse(localStorage.getItem('token_connect')),
        }),
      );
      yield put(editSharePageSuccess(respond));
    } else {
      yield put(editSharePageError(respond.message));
      toast.error(`${respond.message}`, {
        icon: false,
      });
    }
  } catch (err) {
    yield put(editSharePageError(err));
  }
}
export function* resendConfirmEmail(action) {
  const { data } = action;
  const payload = {
    url: `/accounts/resend-confirm-email`,
    params: {
      username: data.username,
      userId: data.userId,
    },
  };
  try {
    const respond = yield call(Api.post, payload);
    if (respond.success) {
      toast.success(`${respond.message}`);
      yield put(resendConfirmEmailSuccess(respond));
    } else {
      yield put(resendConfirmEmailError(respond.message));
      toast.error(`${respond.message}`, {
        icon: false,
      });
    }
  } catch (err) {
    console.log('err', err);
    yield put(resendConfirmEmailError(err));
  }
}
export function* setupEmail(action) {
  const { data } = action;
  const payload = {
    url: `/accounts/sns-setup-email`,
    params: {
      email: data,
    },
  };
  try {
    const respond = yield call(Api.post, payload);
    if (respond.success) {
      yield put(setupEmailSuccess(respond));
    } else {
      yield put(setupEmailError(respond.message));
    }
  } catch (err) {
    yield put(setupEmailError(err));
  }
}
export function* getExchangeRate() {
  const payload = {
    url: `/custom/get-exchange-rate`,
  };
  try {
    const respond = yield call(Api.get, payload);
    if (respond.success) {
      yield put(getExchangeRateSuccess(respond));
    } else {
      yield put(getExchangeRateError(respond.message));
    }
  } catch (err) {
    yield put(getExchangeRateError(err));
  }
}

export default function* watchAll() {
  yield all([takeLatest(LOGOUT_PENDING, logout)]);
  yield takeLatest(GET_USER_INFO_PENDING, getUserInfoSaga);
  yield takeLatest(UPDATE_USER_INFO_PENDING, updateUserInfo);
  yield takeLatest(REMOVE_AVATAR_PENDING, removeAvatar);
  yield takeLatest(GET_LIST_EX_WALLET_PENDING, getListExWallet);
  yield takeLatest(GET_USER_CONNECT_PENDING, getUserConnect);
  yield takeLatest(GET_TIME_PL_PENDING, getTimePL);
  yield takeLatest(GET_PL_USER_PENDING, getPlUser);
  yield takeLatest(EDIT_WALLET_PENDING, editWallet);
  yield takeLatest(EDIT_NETWORK_PENDING, editNetwork);
  yield takeLatest(EDIT_EXCHANGE_API_PENDING, editExchangeApi);
  yield takeLatest(EDIT_EXCHANGE_CSV_PENDING, editExchangeCsv);
  yield takeLatest(REMOVE_CONNECTION_PENDING, removeConnection);
  yield takeLatest(GET_BLOCK_LIST_PENDING, getBlockList);
  yield takeLatest(ADD_BLOCK_LIST_PENDING, addBlockList);
  yield takeLatest(REMOVE_BLOCK_LIST_PENDING, removeBlockList);
  yield takeLatest(GET_COIN_BY_USER_PENDING, getCoinByUser);
  yield takeLatest(GET_PL_DEMO_PENDING, getPlDemo);
  yield takeLatest(LOGIN_SOCIAL_PENDING, loginSocial);
  yield takeLatest(GET_COINS_PENDING, getCoins);
  yield takeLatest(DEMO_CONNECT_PENDING, getDemoConnect);
  yield takeLatest(CREATE_LINK_PENDING, createLink);
  yield takeLatest(GET_VIEW_LINK_PENDING, getViewLinkSaga);
  yield takeLatest(REMOVE_LINK_PENDING, removeLink);
  yield takeLatest(EDIT_SHARE_PAGE_PENDING, editSharePage);
  yield takeLatest(GET_LINE_CHART_PENDING, getDataLineChart);
  yield takeLatest(GET_LINE_CHART_DEMO_PENDING, getDataLineChartDemo);
  yield takeLatest(RESEND_CONFIRM_EMAIL_PENDING, resendConfirmEmail);
  yield takeLatest(SETUP_EMAIL_PENDING, setupEmail);
  yield takeLatest(EXCHANGE_RATE_PENDING, getExchangeRate);
}
