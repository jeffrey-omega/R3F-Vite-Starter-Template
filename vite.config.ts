import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

import pkg from "./package.json";

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
  base: `/${pkg.name}/`,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["@playwright/test"],
  },
});
