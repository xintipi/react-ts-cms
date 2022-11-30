import { notification } from 'antd';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import Cookies from 'js-cookie';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  timeout: 6000,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json;charset=UTF-8',
  },
});

// Interceptors
instance.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig => {
    if (Cookies.get('app_cms')) {
      config.headers['Authorization'] = `Bearer ${Cookies.get('app_cms')}`;
    }
    return config;
  },
);

instance.interceptors.response.use(
  (response): AxiosResponse => response,
  async (error): Promise<AxiosError> => {
    // Do something with response error
    const { status, data } = error.response;
    const key = 'responseError';

    if (status) {
      notification.error({
        key,
        message: 'message_error',
        description: data.message,
      });
    }

    return Promise.reject(error);
  },
);

export default instance;
