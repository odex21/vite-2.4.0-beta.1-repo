import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import packages from './package.json'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {},
  build: {
    lib: {
      entry: './src/',
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(packages.dependencies),
    },
  },
})
