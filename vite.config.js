// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/looplearn/',        // <-- required for GitHub Pages under /looplearn/
  build: {
    chunkSizeWarningLimit: 1200
  }
})
