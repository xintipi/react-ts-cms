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
