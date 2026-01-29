import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the clean, standard config that will pass the Vercel audit
export default defineConfig({
  plugins: [react()],
})