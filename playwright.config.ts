// playwright.config.ts
import { type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './test',
  testMatch: /.*\.e2e\.ts/,
};
export default config;