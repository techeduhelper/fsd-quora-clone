import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'], // Include the necessary dependencies
  },
};

