import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: 'src/libs/sum.ts',
      name: 'calc',
      fileName: (format) => `calc.${format}.js`
    }
  }
});
