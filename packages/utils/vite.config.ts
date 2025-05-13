import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.ts',
      preserveEntrySignatures: 'allow-extension',
    },
    lib: {
      entry: '.src/add.ts',
      name: 'utils',
      fileName: (format) => `utils.${format}.js`
    }
  },

})
