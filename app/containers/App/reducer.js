import produce from 'immer';
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
  EDIT_EXCHANGE_API_PENDING,
  EDIT_EXCHANGE_API_SUCCESS,
  EDIT_EXCHANGE_API_ERROR,
  EDIT_NETWORK_PENDING,
  EDIT_NETWORK_SUCCESS,
  EDIT_NETWORK_ERROR,
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
  GET_VIEW_LINK_PENDING,
  GET_VIEW_LINK_SUCCESS,
  GET_VIEW_LINK_ERROR,
  REMOVE_LINK_PENDING,
  REMOVE_LINK_SUCCESS,
  REMOVE_LINK_ERROR,
  EDIT_SHARE_PAGE_PENDING,
  EDIT_SHARE_PAGE_SUCCESS,
  EDIT_SHARE_PAGE_ERROR,
  SET_EX_WALLET_SELECT,
  TAB_ACTIVE_PORTFOLIO,
  GET_LINE_CHART_PENDING,
  GET_LINE_CHART_SUCCESS,
  GET_LINE_CHART_ERROR,
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

const initialNotifiesStatus = {};

export const initialState = {
  loading: false,
  shouldReloadPage: false,
  userInfo: {},
  listExWallet: [],
  listUserExWallet: [],
  listTimePl: [],
  dataPlUser: {},
  isSuccess: false,
  errorText: '',
  blockList: [],
  listCoinByUser: [],
  isUpdateInfoSuccess: false,
  dataPlDemo: {},
  listCoins: [],
  demoConnect: [],
  linkShare: '',
  exWalletSelected: 'ALL_ASSET',
  tabActivePortfolio: 0,
  dataLineChart: {},
  isCustomConnect: false,
  viewLink: [],
  isCreateLinkShareSuccess: false,
  isSetupEmailSuccess: false,
  dataExRate: [],
  errorSetupText: '',
  exRateCurrency: {},
  isEditSuccess: false,
  isDeleteSuccess: false,
  isCallApiSuccess: false,
  isSearchConnection: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CLEAR_COMMON_STATE:
        return { ...initialState };
      case CLEAR_ALL_NOTIFY_STATUS:
        return {
          ...state,
          ...initialNotifiesStatus,
        };
      case GET_USER_INFO_PENDING:
        return {
          ...state,
          loading: true,
          userInfo: {},
        };
      case LOGOUT_PENDING:
      case GET_TIME_PL_PENDING:
      case GET_COIN_BY_USER_PENDING:
      case GET_BLOCK_LIST_PENDING:
      case EXCHANGE_RATE_PENDING:
        return { ...state, loading: true };
      case EDIT_WALLET_PENDING:
      case EDIT_EXCHANGE_API_PENDING:
      case EDIT_NETWORK_PENDING:
      case EDIT_EXCHANGE_CSV_PENDING:
        return {
          ...state,
          loading: true,
          isEditSuccess: false,
          errorText: undefined,
        };
      case REMOVE_CONNECTION_PENDING:
        return {
          ...state,
          loading: true,
          isSuccess: false,
          isDeleteSuccess: false,
          errorText: undefined,
        };
      case ADD_BLOCK_LIST_PENDING:
      case REMOVE_BLOCK_LIST_PENDING:
        return {
          ...state,
          loading: true,
          isSuccess: false,
          errorText: undefined,
        };
      case GET_PL_DEMO_PENDING:
      case GET_PL_USER_PENDING:
        return { ...state, loading: true, dataPlUser: {} };
      case LOGOUT_SUCCESS:
        return {
          ...initialState,
        };
      case LOGOUT_ERROR:
        return { ...state, loading: false };
      case GET_USER_INFO_ERROR:
        return { ...state, loading: false, userInfo: {} };
      case GET_USER_INFO_SUCCESS:
        return {
          ...state,
          loading: false,
          userInfo: action.respond.data,
        };
      case GET_LIST_EX_WALLET_PENDING:
        return {
          ...state,
          listExWallet: [],
          loading: true,
          isCustomConnect: false,
        };
      case GET_LIST_EX_WALLET_SUCCESS:
        return {
          ...state,
          listExWallet: action.respond.data.source,
          loading: false,
          isCustomConnect: !!action.respond.messageCode,
        };
      case GET_PL_USER_ERROR:
      case GET_PL_DEMO_ERROR:
        return {
          ...state,
          loading: false,
          dataPlUser: {},
        };
      case GET_USER_CONNECT_ERROR:
      case DEMO_CONNECT_ERROR:
        return {
          ...state,
          listUserExWallet: [],
          loading: false,
          isCallApiSuccess: false,
        };
      case EXCHANGE_RATE_ERROR:
      case GET_LIST_EX_WALLET_ERROR:
      case GET_TIME_PL_ERROR:
      case GET_COIN_BY_USER_ERROR:
      case GET_BLOCK_LIST_ERROR:
        return {
          ...state,
          // errorText: action.error,
          loading: false,
        };
      case UPDATE_USER_INFO_PENDING:
      case REMOVE_AVATAR_PENDING:
        return {
          ...state,
          errorText: undefined,
          loading: true,
          isUpdateInfoSuccess: false,
        };
      case UPDATE_USER_INFO_SUCCESS:
      case REMOVE_AVATAR_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdateInfoSuccess: true,
          errorText: '',
        };
      case DEMO_CONNECT_PENDING:
      case GET_USER_CONNECT_PENDING:
        return { ...state, listUserExWallet: [], isCallApiSuccess: false };
      case DEMO_CONNECT_SUCCESS:
      case GET_USER_CONNECT_SUCCESS:
        return {
          ...state,
          // loading: false,
          listUserExWallet: action.respond.data,
          isCallApiSuccess: true,
        };
      case GET_TIME_PL_SUCCESS:
        return {
          ...state,
          loading: false,
          listTimePl: action.respond.data.TIME_PL,
        };
      case GET_PL_USER_SUCCESS:
      case GET_PL_DEMO_SUCCESS:
        return {
          ...state,
          loading: false,
          dataPlUser: action.respond.data,
        };
      case EDIT_WALLET_SUCCESS:
      case EDIT_NETWORK_SUCCESS:
      case EDIT_EXCHANGE_API_SUCCESS:
      case EDIT_EXCHANGE_CSV_SUCCESS:
        return {
          ...state,
          isEditSuccess: true,
          loading: false,
        };
      case REMOVE_CONNECTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isSuccess: true,
          isDeleteSuccess: true,
        };
      case GET_BLOCK_LIST_SUCCESS:
        return {
          ...state,
          blockList: action.respond.data,
          loading: false,
        };
      case ADD_BLOCK_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          isSuccess: true,
        };
      case REMOVE_BLOCK_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          isSuccess: true,
        };
      case GET_COIN_BY_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          listCoinByUser: action.respond.data.source,
        };
      case UPDATE_USER_INFO_ERROR:
      case REMOVE_AVATAR_ERROR:
        return {
          ...state,
          errorText: action.error,
          loading: false,
          isUpdateInfoSuccess: false,
        };
      case EDIT_WALLET_ERROR:
      case EDIT_EXCHANGE_API_ERROR:
      case EDIT_NETWORK_ERROR:
      case EDIT_EXCHANGE_CSV_ERROR:
        return {
          ...state,
          isEditSuccess: false,
          loading: false,
          errorText: action.error,
        };
      case REMOVE_CONNECTION_ERROR:
        return {
          ...state,
          isSuccess: false,
          loading: false,
          isDeleteSuccess: false,
          errorText: action.error,
        };
      case ADD_BLOCK_LIST_ERROR:
      case REMOVE_BLOCK_LIST_ERROR:
        return {
          ...state,
          isSuccess: false,
          loading: false,
          errorText: action.error,
        };

      case LOGIN_SOCIAL_ERROR:
        return {
          ...state,
          errorText: action.error,
          loading: false,
        };
      case LOGIN_SOCIAL_PENDING:
        return { ...state, errorText: undefined, loading: true };
      case LOGIN_SOCIAL_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case GET_COINS_PENDING:
        return { ...state, loading: true, listCoins: [] };
      case GET_COINS_SUCCESS:
        return {
          ...state,
          listCoins: action.respond.data.source,
          loading: false,
        };
      case GET_COINS_ERROR:
        return {
          ...state,
          loading: false,
          listCoins: [],
        };

      case GET_VIEW_LINK_PENDING:
        return { ...state, loading: true, viewLink: [] };
      case GET_VIEW_LINK_SUCCESS:
        return {
          ...state,
          viewLink: action.respond.data,
          loading: false,
        };
      case GET_VIEW_LINK_ERROR:
        return {
          ...state,
          loading: false,
          viewLink: [],
        };
      case CREATE_LINK_PENDING:
        return {
          ...state,
          loading: true,
          linkShare: '',
          isCreateLinkShareSuccess: false,
        };
      case CREATE_LINK_SUCCESS:
        return {
          ...state,
          linkShare: action.respond.data,
          loading: false,
          isCreateLinkShareSuccess: true,
        };
      case CREATE_LINK_ERROR:
        return {
          ...state,
          loading: false,
          linkShare: '',
          isCreateLinkShareSuccess: false,
        };
      case REMOVE_LINK_PENDING:
        return {
          ...state,
          loading: true,
          linkShare: '',
          isCreateLinkShareSuccess: false,
        };
      case REMOVE_LINK_SUCCESS:
        return {
          ...state,
          loading: false,
          isCreateLinkShareSuccess: true,
        };
      case REMOVE_LINK_ERROR:
        return {
          ...state,
          loading: false,
          errorText: action.error,
          isCreateLinkShareSuccess: false,
        };
      case EDIT_SHARE_PAGE_PENDING:
        return { ...state, loading: false, isCreateLinkShareSuccess: false };
      case EDIT_SHARE_PAGE_SUCCESS:
        return {
          ...state,
          isCreateLinkShareSuccess: true,
          loading: false,
        };
      case EDIT_SHARE_PAGE_ERROR:
        return {
          ...state,
          loading: false,
          errorText: action.error,
          isCreateLinkShareSuccess: false,
        };
      case SET_EX_WALLET_SELECT:
        return {
          ...state,
          exWalletSelected: action.data,
        };
      case TAB_ACTIVE_PORTFOLIO:
        return {
          ...state,
          tabActivePortfolio: action.data,
        };
      case GET_LINE_CHART_DEMO_PENDING:
      case GET_LINE_CHART_PENDING:
        return {
          ...state,
          loading: true,
          dataLineChart: {},
        };
      case GET_LINE_CHART_DEMO_SUCCESS:
      case GET_LINE_CHART_SUCCESS:
        return {
          ...state,
          loading: false,
          dataLineChart: action.respond.data,
        };
      case GET_LINE_CHART_DEMO_ERROR:
      case GET_LINE_CHART_ERROR:
        return {
          ...state,
          loading: false,
          dataLineChart: {},
        };

      case SET_LINK_SHARE:
        return {
          ...state,
          linkShare: '',
        };
      case RESEND_CONFIRM_EMAIL_PENDING:
        return {
          ...state,
          errorText: undefined,
          loading: true,
        };
      case RESEND_CONFIRM_EMAIL_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case RESEND_CONFIRM_EMAIL_ERROR:
        return {
          ...state,
          loading: false,
          errorText: action.error,
        };
      case SETUP_EMAIL_PENDING:
        return {
          ...state,
          loading: true,
          isSetupEmailSuccess: false,
          errorSetupText: '',
        };
      case SETUP_EMAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          isSetupEmailSuccess: true,
          errorSetupText: '',
        };
      case SETUP_EMAIL_ERROR:
        return {
          ...state,
          loading: false,
          isSetupEmailSuccess: false,
          errorSetupText: action.error,
        };
      case EXCHANGE_RATE_SUCCESS:
        return {
          ...state,
          loading: false,
          dataExRate: action.respond.data,
        };
      case SET_EX_RATE:
        return {
          ...state,
          exRateCurrency: action.data,
        };
      case UPDATE_STATE_SETUP_EMAIL:
        return {
          ...state,
          isSetupEmailSuccess: false,
        };
      case SET_IS_SEARCH_CONNECTION:
        return {
          ...state,
          isSearchConnection: action.data,
        };
      case SET_ERROR_TEXT_DEFAULT:
        return {
          ...state,
          errorText: undefined,
        };
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
