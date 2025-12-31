import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    host: true,
    port: 5000,
    strictPort: true,
    open: true,
  },
  define: {
    __APP_NAME__: JSON.stringify('Solipsism'),
    __APP_VERSION__: JSON.stringify('0.1.0_alpha'),
  },
})
