import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const entry = (file) => fileURLToPath(new URL(file, import.meta.url))

const privateTitles = entry('./src/content/review-titles.private.js')

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // The titles of the papers reviewed are private. The dev server reads them from a
      // git-ignored file when it is there; a build never does, so none reach the live site.
      'review-titles': command === 'serve' && existsSync(privateTitles)
        ? privateTitles
        : entry('./src/content/review-titles.empty.js'),
    },
  },
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
}))
