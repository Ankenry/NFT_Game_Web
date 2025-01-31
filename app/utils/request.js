import axios from 'axios';
import history from 'utils/history';
import { toast } from 'react-toastify';
import { ROOT_URI, API_TIMEOUT, ROUTER_LOGIN } from './constants';

const instance = axios.create({
  baseURL: ROOT_URI,
  timeout: API_TIMEOUT,
});

const sendRequest = ({ url, method, params, data, getRespondHeader }) =>
  instance({
    url,
    method,
    params,
    data,
    headers: {
      uid: localStorage.getItem('uid') || '',
      client: localStorage.getItem('client') || '',
      Authorization: localStorage.getItem('token') || '',
    },
  })
    .then(response => {
      if (!response.data.error || response.data.error === 0) {
        return handleSuccess(response, getRespondHeader);
      }
      return handleError(response);
    })
    .catch(error => handleError(error));

export const get = ({ url, params, getRespondHeader }) =>
  sendRequest({ url, params, getRespondHeader, method: 'GET' });

export const post = ({ url, params, data, getRespondHeader }) =>
  sendRequest({ url, params, data, getRespondHeader, method: 'POST' });

export const put = ({ url, params, data, getRespondHeader }) =>
  sendRequest({ url, params, data, getRespondHeader, method: 'PUT' });

export const deleteData = ({ url, params, data, getRespondHeader }) =>
  sendRequest({ url, params, data, getRespondHeader, method: 'DELETE' });

const handleSuccess = (response, getRespondHeader) => {
  if (
    response.headers.uid &&
    response.headers.client &&
    // response.headers['access-token']
    response.headers.Authorization
  ) {
    localStorage.setItem('uid', `${response.headers.uid}`);
    localStorage.setItem('client', `${response.headers.client}`);
    localStorage.setItem('token', `${response.headers.Authorization}`);
    // localStorage.setItem('access-token', `${response.headers['access-token']}`);
  }
  // if (response.data.data.token) {
  //   localStorage.setItem('access-token', response.data.data.token);
  // }
  if (getRespondHeader) {
    const respond = {
      totalCount: +response.headers['x-total'],
      data: response.data,
    };
    return Promise.resolve(respond);
  }
  return Promise.resolve(response && response.data);
};

const handleError = error => {
  if (error.response) {
    if (error.response.status === 401) {
      history.push(ROUTER_LOGIN);
    }
    return Promise.reject(
      error.response.data.errors || error.response.data.error,
    );
  }
  // if (error.message === 'Network Error') {
  //   history.push('/500');
  //   toast.error(`Network error: Unable to connect to API`, {
  //     icon: false,
  //   });
  // }

  return Promise.reject(error);
};
