import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dynamic base path:
// - GitHub Pages (via GitHub Actions): '/KS-Construction/'
// - Vercel / Netlify / Custom Domain / Local: '/'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = process.env.BASE_PATH || (isGitHubPages ? '/KS-Construction/' : '/');

export default defineConfig({
  plugins: [react()],
  base: basePath,
});
