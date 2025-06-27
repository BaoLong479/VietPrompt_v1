import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'vietprompt.onrender.com',
      '.onrender.com',
      '.vercel.app'
    ]
  },
  define: {
    'process.env': {}
  }
})
