import axios, { AxiosHeaders } from 'axios';
import { TObj } from '@repo/core/types';

const baseURL = import.meta.env.VITE_SERVER_HOST_URL;
const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCaller = {
  getInstance: () => instance,
  get: (url: string, params?: TObj, headers?: AxiosHeaders) =>
    instance.get(url, { params, headers }),
  post: (url: string, data?: TObj, headers?: AxiosHeaders) => instance.post(url, data, { headers }),
  put: (url: string, data?: TObj, headers?: AxiosHeaders) => instance.put(url, data, { headers }),
  patch: (url: string, data?: TObj, headers?: AxiosHeaders) =>
    instance.patch(url, data, { headers }),
  delete: (url: string, headers?: AxiosHeaders) => instance.delete(url, { headers }),
};

export default apiCaller;
