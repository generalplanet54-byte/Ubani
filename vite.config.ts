import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Derive base from REPO_NAME env, else from GITHUB_REPOSITORY (owner/repo), else '/'.
function computeBase() {
  const envName = process.env.REPO_NAME;
  if (envName) return envName;

  // Only derive from GITHUB_REPOSITORY when running in CI (GitHub Actions or generic CI)
  const isCI = !!(process.env.GITHUB_ACTIONS || process.env.CI);
  if (isCI) {
    const githubRepo = process.env.GITHUB_REPOSITORY;
    if (githubRepo) {
      // githubRepo format: owner/repo
      const parts = githubRepo.split('/');
      const repo = parts[1] || parts[0];
      return `/${repo}/`;
    }
  }

  // Default for local dev/builds
  return '/';
}

export default defineConfig({
  base: computeBase(),
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs',
  },
});
