import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const repoName = process.env.REPO_NAME || '/Ubani/';

export default defineConfig({
  base: repoName,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs',
  },
});
