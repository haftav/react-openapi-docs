import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@models', replacement: '/src/models' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
});
