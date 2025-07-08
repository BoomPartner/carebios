import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ✔️ usa Babel, NO swc

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
