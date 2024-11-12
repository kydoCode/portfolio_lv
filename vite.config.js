import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  base: '/',
  build: {
    rollupOptions: {
      // Removed @radix-ui/react-accordion from external dependencies
    },
  },
})
