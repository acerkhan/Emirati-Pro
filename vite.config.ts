import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'YOUR-REPO-NAME' with your actual GitHub repository name (e.g. 'emirati-arabic-app')
export default defineConfig({
  plugins: [react()],
  base: '/Emirati-Pro/', 
})
