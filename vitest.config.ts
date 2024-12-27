/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// https://vite.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        // https://playwright.dev
        providerOptions: {},
      },
    },
  })
);
