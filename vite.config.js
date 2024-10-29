import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'public',
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  base: '/portfolio_lv/',
})
