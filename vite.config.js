import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths for static / subdirectory hosting.
  // Pair with HashRouter so /contact links keep working without SPA fallback.
  base: './',
});
