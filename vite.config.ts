import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPLACE: Set to your GitHub Pages repository name, e.g. "/my-anniversary-site/"
// If deploying to username.github.io root, set base to "/"
const BASE_PATH = "/Happy-aniversary/"

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
})
