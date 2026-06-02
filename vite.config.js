import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Resume-Built-With-ReactJS-And-Tailwind/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})