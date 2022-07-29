import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dayjs from 'dayjs';
// @ts-ignore
import pkg from './package.json';
import * as path from 'path';

const { dependencies, devDependencies, name, version, author } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, author },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    host: true,
    port: 8000,
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    chunkSizeWarningLimit: 2000,
  },
  define: {
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
  plugins: [react()],
});
