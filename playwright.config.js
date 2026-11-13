import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  
  use: {
    baseURL: 'http://localhost:8080',
  },
  webServer: {                      // ← aqui, dentro das chaves
    command: 'npm run build && npm run preview -- --port 8080 --strictPort',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
})