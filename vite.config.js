import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';


const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir);
};
const alias = {
  '@': pathResolve('./src/'),
};

export default defineConfig({
  plugins: [vue()],
  resolve: { alias }
})
