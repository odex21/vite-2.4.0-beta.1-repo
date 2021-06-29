import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'

import { DEFAULT_EXTENSIONS } from '@babel/core'
const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: [
      { find: '/@', replacement: path.resolve('./src') },
      {
        find: /^@scope\/(.*)$/,
        replacement: '@scope/$1/src/index.ts',
      },
    ],
  },
  build: {
    rollupOptions: {
      plugins: [
        babel({
          extensions,
        }),
        visualizer(),
      ],
    },
  },
})
