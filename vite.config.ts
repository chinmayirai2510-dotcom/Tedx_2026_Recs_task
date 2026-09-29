import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['gsap', 'framer-motion', 'lenis'],
          icons: ['lucide-react', 'qrcode', 'canvas-confetti'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
