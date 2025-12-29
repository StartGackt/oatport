import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Path aliases
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Build optimizations
  build: {
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['react-icons'],
          'router': ['react-router-dom'],
        },
      },
    },
    // Minify output
    minify: 'esbuild',
    // Target modern browsers
    target: 'es2020',
    // Generate sourcemaps for debugging
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
  },

  // Dev server optimizations
  server: {
    port: 5173,
    open: true,
    cors: true,
  },

  // Preview server
  preview: {
    port: 4173,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
  },
})
