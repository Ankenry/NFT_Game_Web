import { ROUTER_LOGIN } from 'utils/constants';
import { handleLogout } from 'utils/helpers';
import history from 'utils/history';
import {
  DEFAULT_ACTION,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CLEAR_ALL_NOTIFY_STATUS,
  CLEAR_COMMON_STATE,
  GET_USER_INFO_PENDING,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  GET_LIST_EX_WALLET_PENDING,
  GET_LIST_EX_WALLET_SUCCESS,
  GET_LIST_EX_WALLET_ERROR,
  UPDATE_USER_INFO_PENDING,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR,
  GET_USER_CONNECT_PENDING,
  GET_USER_CONNECT_SUCCESS,
  GET_USER_CONNECT_ERROR,
  GET_TIME_PL_PENDING,
  GET_TIME_PL_SUCCESS,
  GET_TIME_PL_ERROR,
  GET_PL_USER_PENDING,
  GET_PL_USER_SUCCESS,
  GET_PL_USER_ERROR,
  EDIT_WALLET_PENDING,
  EDIT_WALLET_SUCCESS,
  EDIT_WALLET_ERROR,
  EDIT_NETWORK_PENDING,
  EDIT_NETWORK_SUCCESS,
  EDIT_NETWORK_ERROR,
  EDIT_EXCHANGE_API_PENDING,
  EDIT_EXCHANGE_API_SUCCESS,
  EDIT_EXCHANGE_API_ERROR,
  EDIT_EXCHANGE_CSV_PENDING,
  EDIT_EXCHANGE_CSV_SUCCESS,
  EDIT_EXCHANGE_CSV_ERROR,
  REMOVE_CONNECTION_ERROR,
  REMOVE_CONNECTION_PENDING,
  REMOVE_CONNECTION_SUCCESS,
  GET_BLOCK_LIST_PENDING,
  GET_BLOCK_LIST_SUCCESS,
  GET_BLOCK_LIST_ERROR,
  ADD_BLOCK_LIST_PENDING,
  ADD_BLOCK_LIST_SUCCESS,
  ADD_BLOCK_LIST_ERROR,
  REMOVE_BLOCK_LIST_PENDING,
  REMOVE_BLOCK_LIST_SUCCESS,
  REMOVE_BLOCK_LIST_ERROR,
  GET_COIN_BY_USER_PENDING,
  GET_COIN_BY_USER_SUCCESS,
  GET_COIN_BY_USER_ERROR,
  GET_PL_DEMO_PENDING,
  GET_PL_DEMO_SUCCESS,
  GET_PL_DEMO_ERROR,
  LOGIN_SOCIAL_PENDING,
  LOGIN_SOCIAL_SUCCESS,
  LOGIN_SOCIAL_ERROR,
  GET_COINS_PENDING,
  GET_COINS_SUCCESS,
  GET_COINS_ERROR,
  REMOVE_AVATAR_PENDING,
  REMOVE_AVATAR_SUCCESS,
  REMOVE_AVATAR_ERROR,
  DEMO_CONNECT_PENDING,
  DEMO_CONNECT_SUCCESS,
  DEMO_CONNECT_ERROR,
  CREATE_LINK_PENDING,
  CREATE_LINK_SUCCESS,
  CREATE_LINK_ERROR,
  REMOVE_LINK_PENDING,
  REMOVE_LINK_SUCCESS,
  REMOVE_LINK_ERROR,
  SET_EX_WALLET_SELECT,
  TAB_ACTIVE_PORTFOLIO,
  GET_LINE_CHART_PENDING,
  GET_LINE_CHART_SUCCESS,
  GET_LINE_CHART_ERROR,
  GET_VIEW_LINK_PENDING,
  GET_VIEW_LINK_SUCCESS,
  GET_VIEW_LINK_ERROR,
  EDIT_SHARE_PAGE_PENDING,
  EDIT_SHARE_PAGE_SUCCESS,
  EDIT_SHARE_PAGE_ERROR,
  SET_LINK_SHARE,
  GET_LINE_CHART_DEMO_PENDING,
  GET_LINE_CHART_DEMO_SUCCESS,
  GET_LINE_CHART_DEMO_ERROR,
  RESEND_CONFIRM_EMAIL_PENDING,
  RESEND_CONFIRM_EMAIL_SUCCESS,
  RESEND_CONFIRM_EMAIL_ERROR,
  SETUP_EMAIL_PENDING,
  SETUP_EMAIL_SUCCESS,
  SETUP_EMAIL_ERROR,
  EXCHANGE_RATE_PENDING,
  EXCHANGE_RATE_SUCCESS,
  EXCHANGE_RATE_ERROR,
  SET_EX_RATE,
  UPDATE_STATE_SETUP_EMAIL,
  SET_IS_SEARCH_CONNECTION,
  SET_ERROR_TEXT_DEFAULT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function clearAllNotifyStatus() {
  return {
    type: CLEAR_ALL_NOTIFY_STATUS,
  };
}
export function clearCommonData() {
  return {
    type: CLEAR_COMMON_STATE,
  };
}

export function logout(data) {
  return {
    type: LOGOUT_PENDING,
    data,
  };
}
export function logoutSuccess(respond) {
  handleLogout(ROUTER_LOGIN);
  return {
    type: LOGOUT_SUCCESS,
    respond,
  };
}
export function logoutError(error) {
  handleLogout(ROUTER_LOGIN);
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function getUserInfo() {
  return {
    type: GET_USER_INFO_PENDING,
  };
}
export function getUserInfoSuccess(respond) {
  return {
    type: GET_USER_INFO_SUCCESS,
    respond,
  };
}
export function getUserInfoError(error) {
  handleLogout(ROUTER_LOGIN);
  return {
    type: GET_USER_INFO_ERROR,
    error,
  };
}

export function getListExWallet(data) {
  return {
    type: GET_LIST_EX_WALLET_PENDING,
    data,
  };
}
export function getListExWalletSuccess(respond) {
  return {
    type: GET_LIST_EX_WALLET_SUCCESS,
    respond,
  };
}
export function getListExWalletError(error) {
  return {
    type: GET_LIST_EX_WALLET_ERROR,
    error,
  };
}

export function updateUserInfo(data) {
  return {
    type: UPDATE_USER_INFO_PENDING,
    data,
  };
}
export function updateUserInfoSuccess(respond) {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    respond,
  };
}
export function updateUserInfoError(error) {
  return {
    type: UPDATE_USER_INFO_ERROR,
    error,
  };
}

export function getUserConnect(data) {
  return {
    type: GET_USER_CONNECT_PENDING,
    data,
  };
}
export function getUserConnectSuccess(respond) {
  return {
    type: GET_USER_CONNECT_SUCCESS,
    respond,
  };
}
export function getUserConnectError(error) {
  return {
    type: GET_USER_CONNECT_ERROR,
    error,
  };
}

export function getTimePL() {
  return {
    type: GET_TIME_PL_PENDING,
  };
}
export function getTimePLSuccess(respond) {
  return {
    type: GET_TIME_PL_SUCCESS,
    respond,
  };
}
export function getTimePLError(error) {
  return {
    type: GET_TIME_PL_ERROR,
    error,
  };
}

export function getPlUser(data) {
  return {
    type: GET_PL_USER_PENDING,
    data,
  };
}
export function getPlUserSuccess(respond) {
  return {
    type: GET_PL_USER_SUCCESS,
    respond,
  };
}
export function getPlUserError(error) {
  return {
    type: GET_PL_USER_ERROR,
    error,
  };
}
export function getDataLineChart(data) {
  return {
    type: GET_LINE_CHART_PENDING,
    data,
  };
}
export function getDataLineChartSuccess(respond) {
  return {
    type: GET_LINE_CHART_SUCCESS,
    respond,
  };
}
export function getDataLineChartError(error) {
  return {
    type: GET_LINE_CHART_ERROR,
    error,
  };
}
export function getDataLineChartDemo(data) {
  return {
    type: GET_LINE_CHART_DEMO_PENDING,
    data,
  };
}
export function getDataLineChartDemoSuccess(respond) {
  return {
    type: GET_LINE_CHART_DEMO_SUCCESS,
    respond,
  };
}
export function getDataLineChartDemoError(error) {
  return {
    type: GET_LINE_CHART_DEMO_ERROR,
    error,
  };
}
export function editWallet(data) {
  return {
    type: EDIT_WALLET_PENDING,
    data,
  };
}
export function editWalletSuccess(respond) {
  return {
    type: EDIT_WALLET_SUCCESS,
    respond,
  };
}
export function editWalletError(error) {
  return {
    type: EDIT_WALLET_ERROR,
    error,
  };
}

export function editNetwork(data) {
  return {
    type: EDIT_NETWORK_PENDING,
    data,
  };
}
export function editNetworkSuccess(respond) {
  return {
    type: EDIT_NETWORK_SUCCESS,
    respond,
  };
}
export function editNetworkError(error) {
  return {
    type: EDIT_NETWORK_ERROR,
    error,
  };
}

export function editExchangeApi(data) {
  return {
    type: EDIT_EXCHANGE_API_PENDING,
    data,
  };
}
export function editExchangeApiSuccess(respond) {
  return {
    type: EDIT_EXCHANGE_API_SUCCESS,
    respond,
  };
}
export function editExchangeApiError(error) {
  return {
    type: EDIT_EXCHANGE_API_ERROR,
    error,
  };
}

export function editExchangeCsv(data) {
  return {
    type: EDIT_EXCHANGE_CSV_PENDING,
    data,
  };
}
export function editExchangeCsvSuccess(respond) {
  return {
    type: EDIT_EXCHANGE_CSV_SUCCESS,
    respond,
  };
}
export function editExchangeCsvError(error) {
  return {
    type: EDIT_EXCHANGE_CSV_ERROR,
    error,
  };
}

export function removeConnection(data) {
  return {
    type: REMOVE_CONNECTION_PENDING,
    data,
  };
}
export function removeConnectionSuccess(respond) {
  return {
    type: REMOVE_CONNECTION_SUCCESS,
    respond,
  };
}
export function removeConnectionError(error) {
  return {
    type: REMOVE_CONNECTION_ERROR,
    error,
  };
}

export function getBlockList(data) {
  return {
    type: GET_BLOCK_LIST_PENDING,
    data,
  };
}
export function getBlockListSuccess(respond) {
  return {
    type: GET_BLOCK_LIST_SUCCESS,
    respond,
  };
}
export function getBlockListError(error) {
  return {
    type: GET_BLOCK_LIST_ERROR,
    error,
  };
}
export function addBlockList(data) {
  return {
    type: ADD_BLOCK_LIST_PENDING,
    data,
  };
}
export function addBlockListSuccess(respond) {
  return {
    type: ADD_BLOCK_LIST_SUCCESS,
    respond,
  };
}
export function addBlockListError(error) {
  return {
    type: ADD_BLOCK_LIST_ERROR,
    error,
  };
}
export function removeBlockList(data) {
  return {
    type: REMOVE_BLOCK_LIST_PENDING,
    data,
  };
}
export function removeBlockListSuccess(respond) {
  return {
    type: REMOVE_BLOCK_LIST_SUCCESS,
    respond,
  };
}
export function removeBlockListError(error) {
  return {
    type: REMOVE_BLOCK_LIST_ERROR,
    error,
  };
}
export function getCoinByUser(data) {
  return {
    type: GET_COIN_BY_USER_PENDING,
    data,
  };
}
export function getCoinByUserSuccess(respond) {
  return {
    type: GET_COIN_BY_USER_SUCCESS,
    respond,
  };
}
export function getCoinByUserError(error) {
  return {
    type: GET_COIN_BY_USER_ERROR,
    error,
  };
}
export function getPlDemo(data) {
  return {
    type: GET_PL_DEMO_PENDING,
    data,
  };
}
export function getPlDemoSuccess(respond) {
  return {
    type: GET_PL_DEMO_SUCCESS,
    respond,
  };
}
export function getPlDemoError(error) {
  return {
    type: GET_PL_DEMO_ERROR,
    error,
  };
}
export function loginSocialSuccess(respond) {
  localStorage.setItem('user_info', JSON.stringify(respond.data));
  localStorage.setItem('token', `Bearer ${respond.data.token}`);
  localStorage.removeItem('token_connect');
  localStorage.removeItem('token_connect_favorites');
  history.push('/portfolio');
  // history.push(ROUTER_INDEX);
  return {
    type: LOGIN_SOCIAL_SUCCESS,
    respond,
  };
}
export function loginSocial(data) {
  return {
    type: LOGIN_SOCIAL_PENDING,
    data,
  };
}
export function loginSocialError(error) {
  return {
    type: LOGIN_SOCIAL_ERROR,
    error,
  };
}
export function getCoins(data) {
  return {
    type: GET_COINS_PENDING,
    data,
  };
}
export function getCoinsSuccess(respond) {
  return {
    type: GET_COINS_SUCCESS,
    respond,
  };
}
export function getCoinsError(error) {
  return {
    type: GET_COINS_ERROR,
    error,
  };
}
export function removeAvatar() {
  return {
    type: REMOVE_AVATAR_PENDING,
  };
}

export function removeAvatarSuccess(respond) {
  return {
    type: REMOVE_AVATAR_SUCCESS,
    respond,
  };
}

export function removeAvatarError(error) {
  return {
    type: REMOVE_AVATAR_ERROR,
    error,
  };
}
export function getDemoConnect(data) {
  return {
    type: DEMO_CONNECT_PENDING,
    data,
  };
}
export function getDemoConnectSuccess(respond) {
  return {
    type: DEMO_CONNECT_SUCCESS,
    respond,
  };
}
export function getDemoConnectError(error) {
  return {
    type: DEMO_CONNECT_ERROR,
    error,
  };
}
export function createLink(data) {
  return {
    type: CREATE_LINK_PENDING,
    data,
  };
}
export function createLinkSuccess(respond) {
  return {
    type: CREATE_LINK_SUCCESS,
    respond,
  };
}
export function createLinkError(error) {
  return {
    type: CREATE_LINK_ERROR,
    error,
  };
}
export function removeLink(data) {
  return {
    type: REMOVE_LINK_PENDING,
    data,
  };
}
export function removeLinkSuccess(respond) {
  return {
    type: REMOVE_LINK_SUCCESS,
    respond,
  };
}
export function removeLinkError(error) {
  return {
    type: REMOVE_LINK_ERROR,
    error,
  };
}
export function setExWalletSelect(data) {
  return {
    type: SET_EX_WALLET_SELECT,
    data,
  };
}
export function setTabActivePortfolio(data) {
  return {
    type: TAB_ACTIVE_PORTFOLIO,
    data,
  };
}
export function getViewLink(data) {
  return {
    type: GET_VIEW_LINK_PENDING,
    data,
  };
}
export function getViewLinkSuccess(respond) {
  return {
    type: GET_VIEW_LINK_SUCCESS,
    respond,
  };
}
export function getViewLinkError(error) {
  return {
    type: GET_VIEW_LINK_ERROR,
    error,
  };
}
export function editSharePage(data) {
  return {
    type: EDIT_SHARE_PAGE_PENDING,
    data,
  };
}
export function editSharePageSuccess(respond) {
  return {
    type: EDIT_SHARE_PAGE_SUCCESS,
    respond,
  };
}
export function editSharePageError(error) {
  return {
    type: EDIT_SHARE_PAGE_ERROR,
    error,
  };
}

export function setLinkShare() {
  return {
    type: SET_LINK_SHARE,
  };
}
export function resendConfirmEmail(data) {
  return {
    type: RESEND_CONFIRM_EMAIL_PENDING,
    data,
  };
}

export function resendConfirmEmailSuccess(respond) {
  return {
    type: RESEND_CONFIRM_EMAIL_SUCCESS,
    respond,
  };
}

export function resendConfirmEmailError(error) {
  return {
    type: RESEND_CONFIRM_EMAIL_ERROR,
    error,
  };
}
export function setupEmail(data) {
  return {
    type: SETUP_EMAIL_PENDING,
    data,
  };
}
export function setupEmailSuccess(respond) {
  return {
    type: SETUP_EMAIL_SUCCESS,
    respond,
  };
}
export function setupEmailError(error) {
  return {
    type: SETUP_EMAIL_ERROR,
    error,
  };
}
export function getExchangeRate() {
  return {
    type: EXCHANGE_RATE_PENDING,
  };
}
export function getExchangeRateSuccess(respond) {
  return {
    type: EXCHANGE_RATE_SUCCESS,
    respond,
  };
}
export function getExchangeRateError(error) {
  return {
    type: EXCHANGE_RATE_ERROR,
    error,
  };
}
export function setExRate(data) {
  return {
    type: SET_EX_RATE,
    data,
  };
}
export function updateStateSetupEmail() {
  return {
    type: UPDATE_STATE_SETUP_EMAIL,
  };
}
export function setIsSearchConnection(data) {
  return {
    type: SET_IS_SEARCH_CONNECTION,
    data,
  };
}
export function setErrorTextDefault() {
  return {
    type: SET_ERROR_TEXT_DEFAULT,
  };
}
