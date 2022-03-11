import axios from 'axios';

import { ApiResult } from './api-result';
import { baseURL } from './config';

// Config
const config = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

// Instance
const axiosInstance = axios.create(config);

//  Interceptor Request
axiosInstance.interceptors.request.use(async (requestConfig) => {
  /* const token = '[USER_TOKEN]'; */
  const useRequestConfig = { ...requestConfig };
  /* if (token) {
    useRequestConfig.headers.Authorization = `Bearer ${token}`;
  } */
  return useRequestConfig;
});

// on Ful Filled
const onFulFilled = async (response: any) => {
  const status = response.status === 200;
  const apiResult = new ApiResult(
    response.data.next,
    status,
    response.data.results
  );

  return apiResult;
};

// on Rejected
const onRejected = async (error: any) => {
  const apiResult = {
    message: error?.message,
    status: false,
    data: null,
  };
  return apiResult;
};

//  Interceptor response
axiosInstance.interceptors.response.use(onFulFilled, onRejected);

export default axiosInstance;
