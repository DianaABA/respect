import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'pictures',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        cantera: fileURLToPath(new URL('./cantera/index.html', import.meta.url)),
        privacidad: fileURLToPath(new URL('./privacidad/index.html', import.meta.url)),
      },
    },
  },
})
