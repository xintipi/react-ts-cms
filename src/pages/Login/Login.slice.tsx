import { createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  loginIn: boolean;
}

const initialState: LoginState = {
  loginIn: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startLoginIn: (state, action) => {
      state.loginIn = action.payload;
      console.log(state.loginIn);
    },
  },
});

export const { startLoginIn } = slice.actions;

export default slice.reducer;
