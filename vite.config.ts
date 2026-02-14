import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace 'REPRO_NAME' with your actual repository name if it's not the root domain
  // Since you are using dexterous-workshop.github.io, base is likely '/'
  base: '/',
})
