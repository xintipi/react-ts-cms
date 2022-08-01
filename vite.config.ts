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
    port: 8080,
    open: true,
  },
  preview: {
    port: 5555,
    open: true,
  },
  esbuild: {
    pure: ['console.log', 'debugger'],
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  define: {
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['antd/es/locale/ja_JP', 'antd/es/locale/en_US'],
  },
});
