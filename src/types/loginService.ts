import { ProfileTransfer } from '@/models/Profile';

export interface LoginBody {
  username: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  email: string;
  age: string;
}

export interface RecordLogin {
  data: LoginResponse;
}

export interface RecordProfile {
  data: ProfileTransfer;
}
