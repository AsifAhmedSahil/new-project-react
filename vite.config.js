import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#components": resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      "#constants": resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      "#store": resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      "#windows": resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
      "#lib": resolve(dirname(fileURLToPath(import.meta.url)), "src/lib"),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor' // put all node_modules in a vendor chunk
          }
          // optional: separate big windows
          if (id.includes('/src/windows/Photos')) {
            return 'photos'
          }
          if (id.includes('/src/windows/Image')) {
            return 'image'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // optional, raise limit to 1MB
  }
})
