import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/components/__tests__/setupVitest.ts'],
    include: ['src/components/__tests__/**/*.test.{ts,tsx}'],
  },
});
