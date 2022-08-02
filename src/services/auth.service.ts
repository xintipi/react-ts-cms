import { AxiosResponse } from 'axios';

import { useAxios } from '@/hooks/useAxios';
import { LoginBody, RecordLogin, RecordProfile } from '@/types/loginService';

const { Get, Post, Delete } = useAxios();

export const Auth = {
  async login(data: LoginBody) {
    return await Post('/auth/login', data).then((resp: RecordLogin) => resp.data);
  },

  async logout() {
    return await Delete('/auth/logout').then((resp: AxiosResponse) => resp.data);
  },

  async profile() {
    return await Get('https://jsonplaceholder.typicode.com/posts').then(
      (resp: { data: RecordProfile }) => resp.data,
    );
  },
};
