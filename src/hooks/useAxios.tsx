import axiosInstance from '@/config/axios';

export const useAxios = () => {
  const Get = (url: string, params?: any) => {
    return axiosInstance.get(`${url}`, { params });
  };

  const Post = (url: string, body: any, config?: any) => {
    return axiosInstance.post(`${url}`, body, config);
  };

  const Put = (url: string, body: any, params?: any) => {
    return axiosInstance.put(`${url}`, body, { params });
  };

  const Delete = (url: string, params?: any) => {
    return axiosInstance.delete(url, params);
  };

  return { Get, Post, Put, Delete };
};
