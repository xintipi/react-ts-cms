import axiosInstance from '@/config/axios';

export const ApiService = {
  get(url: string, params = {}) {
    return axiosInstance.get(`${url}`, { params });
  },

  post(url: string, body: any, config = {}) {
    return axiosInstance.post(`${url}`, body, config);
  },

  put(url: string, body: any, params = {}) {
    return axiosInstance.put(`${url}`, body, { params });
  },

  delete(url: string, params = {}) {
    return axiosInstance.delete(url, params);
  },
};
