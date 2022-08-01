import { configureStore } from '@reduxjs/toolkit';

import login from '@/pages/Login/Login.slice';

const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
  reducer: { login },
  devTools: {
    name: 'app_cms',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;
