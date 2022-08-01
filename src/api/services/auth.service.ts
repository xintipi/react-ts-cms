import { AxiosResponse } from 'axios';

import { ApiService } from '@/api';
import { LoginBody, RecordLogin } from '@/types/loginService';

export const Auth = {
  async login(data: LoginBody) {
    return await ApiService.post('/auth/login', data).then(
      (resp: RecordLogin) => resp.data,
    );
  },

  async logout() {
    return await ApiService.delete('/auth/logout').then(
      (resp: AxiosResponse) => resp.data,
    );
  },

  async profile() {
    return await ApiService.get('https://jsonplaceholder.typicode.com/posts').then(
      (resp) => resp.data,
    );
  },
};
