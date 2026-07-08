import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Split the React runtime into its own chunk so app-code changes
        // don't bust the vendor cache on every redeploy.
        manualChunks(id) {
          if (/node_modules[\\/]react(-dom)?[\\/]/.test(id)) return 'react'
        },
      },
    },
  },
})
