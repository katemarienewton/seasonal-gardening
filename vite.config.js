import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // tell Vite where index.html is
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // prevents port shifting → fixes websocket URL
    hmr: {
      host: 'localhost',
      port: 5173,
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  build: {
    outDir: 'dist',
  },
})
