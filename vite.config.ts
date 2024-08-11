import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/layout', import.meta.url)),
      '@component': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@module': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@guard': fileURLToPath(new URL('./src/guards', import.meta.url))
    }
  }
})
