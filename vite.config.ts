import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// VITE_BASE_PATH lets GitHub Pages project deployments serve from a subpath
// (e.g. "/portfolio/"). Vercel and custom domains should leave it unset.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
  },
})
