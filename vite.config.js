import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3001,
    proxy: {
      '/api/': {
       // target: 'http://localhost:5050;http://192.168.115.119:5050;'
         target: 'http://localhost:5050;http://192.168.115.60:5050'
        // target: 'http://localhost:5050'
      }
    }
  }
})
