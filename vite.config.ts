import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      'lucide-react': 'lucide-react/dist/esm/lucide-react'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/]
    }
  }
});