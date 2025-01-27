import react from "@vitejs/plugin-react";
import path from "path";
import glsl from "vite-plugin-glsl";
import { defineConfig } from "vitest/config";

/**
 * optional: import package.json to get the name of the package
 * to set the base path to the package name
 * this is useful for deploying to github pages
 *
 * import pkg from "./package.json";
 * base: `/${pkg.name}/`,
 */

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl({
      include: ["**/*.glsl", "**/*.wgsl", "**/*.vert", "**/*.frag"],
      defaultExtension: "glsl",
      watch: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["@playwright/test"],
  },
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
