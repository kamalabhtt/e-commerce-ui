import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/e-commerce-ui/',   // Add this line exactly like this
  plugins: [react(), tailwindcss()],
})
