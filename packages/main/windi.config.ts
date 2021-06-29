import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  plugins: [typography],
  safelist: ['pointer-events-none'],
  attributify: {
    prefix: 'w:',
  },
})
