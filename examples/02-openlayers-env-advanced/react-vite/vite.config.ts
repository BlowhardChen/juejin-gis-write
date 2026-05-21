import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const olRoot = fileURLToPath(new URL('./node_modules/ol', import.meta.url));
const sharedRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^ol\/(.+)$/, replacement: `${olRoot}/$1` },
      { find: 'ol', replacement: olRoot },
    ],
  },
  server: {
    fs: {
      allow: [projectRoot, sharedRoot],
    },
  },
});
