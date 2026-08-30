import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://balaji2271.github.io/KS-Construction/
export default defineConfig({
  plugins: [react()],
  base: '/KS-Construction/',
});
