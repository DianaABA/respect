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
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
        en: fileURLToPath(new URL('./en/index.html', import.meta.url)),
        enYouth: fileURLToPath(new URL('./en/youth/index.html', import.meta.url)),
        enPrivacy: fileURLToPath(new URL('./en/privacy/index.html', import.meta.url)),
        ru: fileURLToPath(new URL('./ru/index.html', import.meta.url)),
        ruYouth: fileURLToPath(new URL('./ru/youth/index.html', import.meta.url)),
        ruPrivacy: fileURLToPath(new URL('./ru/privacy/index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about/index.html', import.meta.url)),
        enAbout: fileURLToPath(new URL('./en/about/index.html', import.meta.url)),
        ruAbout: fileURLToPath(new URL('./ru/about/index.html', import.meta.url)),
      },
    },
  },
})
