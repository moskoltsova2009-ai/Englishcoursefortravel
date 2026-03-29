import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 👇 Базовый путь для GitHub Pages
  // Формат: /имя-репозитория/
  // Важно: если репозиторий называется Englishcoursefortravel, 
  // сайт будет доступен по /Englishcoursefortravel/
  base: '/Englishcoursefortravel/',
  
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  
  // 👇 Опционально: явное указание папки сборки (по умолчанию 'dist')
  build: {
    outDir: 'dist',
    // 👇 Удаляем папку dist перед каждой сборкой (полезно для чистого деплоя)
    emptyOutDir: true,
  },
})
