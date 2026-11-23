import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const entry = (file) => fileURLToPath(new URL(file, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  // Each page is its own HTML entry, so an unknown path is a 404 and not the home.
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: entry('./index.html'),
        work: entry('./work/index.html'),
        research: entry('./research/index.html'),
        reviews: entry('./reviews/index.html'),
        media: entry('./media/index.html'),
      },
    },
  },
})
